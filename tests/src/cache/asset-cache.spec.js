import { assert, expect } from 'chai';
import { AssetCache } from '../../../src/cache/asset-cache';

describe('AssetCache', () => {
  let assetCache, shakaInstance;

  beforeEach(() => {
    assetCache = new AssetCache();
    shakaInstance = {
      preload: () => {},
      destroy: () => {}
    }
  });
  afterEach(() => {
    assetCache = null;
    sinon.restore();
  });

  describe('get', () => {
    let get;
    beforeEach(() => {
      get = sinon.spy(assetCache, 'get');
    });
    it('should return null if asset was not added', () => {
      expect(assetCache.get('abc')).to.equal(null);
    });
    it('should return null if asset was added but shaka is not set', () => {
      assetCache.add('abc');
      expect(assetCache.get('abc')).to.equal(null);
    });
    it('should return the asset promise if shaka was set first, and then asset was added', done => {
      const preload = sinon.stub(shakaInstance, 'preload').resolves('def');
      assetCache.init(shakaInstance);
      assetCache.add('abc');
      assetCache.get('abc').then(result => {
        expect(preload).to.have.been.calledOnceWith('abc');
        expect(result).to.equal('def');
        done();
      });
    });
    it('should return the asset promise if asset was added first, and then shaka was set', done => {
      const preload = sinon.stub(shakaInstance, 'preload').resolves('def');
      assetCache.add('abc');
      expect(assetCache.get('abc')).to.equal(null);
      assetCache.init(shakaInstance);
      assetCache.get('abc').then(result => {
        expect(preload).to.have.been.calledOnceWith('abc');
        expect(result).to.equal('def');
        done();
      });
    });
  });

  describe('list', () => {
    it('should not list queued assets', () => {
      assetCache.add('abc');
      assetCache.add('abc');
      assetCache.add('def');

      expect(assetCache.list().length).to.equal(0);
    });
    it('should list all cached assets, without duplicates', () => {
      sinon.stub(shakaInstance, 'preload').resolves({});
      assetCache.init(shakaInstance);

      assetCache.add('abc');
      assetCache.add('abc');
      assetCache.add('def');

      const listResult = assetCache.list();
      expect(listResult.length).to.equal(2);
      expect(listResult.findIndex(i => i === 'abc')).to.not.equal(-1);
      expect(listResult.findIndex(i => i === 'def')).to.not.equal(-1);
    });
  })

  describe('remove', () => {
    it('should remove queued assets, so they will not become cached when shaka is set', () => {
      assetCache.add('abc');
      expect(assetCache.get('abc')).to.equal(null);
      assetCache.remove('abc');
      assetCache.init(shakaInstance);
      expect(assetCache.get('abc')).to.equal(null);
    });
    it('should remove cached assets, if they were added before shaka was set', () => {
      sinon.stub(shakaInstance, 'preload').resolves({});

      assetCache.add('abc');
      expect(assetCache.get('abc')).to.equal(null);
      assetCache.init(shakaInstance);
      expect(assetCache.get('abc')).to.not.equal(null);
      assetCache.remove('abc');
      expect(assetCache.get('abc')).to.equal(null);
    });
    it('should remove assets while they are cached, if they were added after shaka was set', () => {
      sinon.stub(shakaInstance, 'preload').resolves({});

      assetCache.init(shakaInstance);
      assetCache.add('abc');
      expect(assetCache.get('abc')).to.not.equal(null);
      assetCache.remove('abc');
      expect(assetCache.get('abc')).to.equal(null);
    });
    it('should destroy cached asset', done => {
      const preloadResult = { destroy: () => {}, waitForFinish: () =>  {}};
      const preload = sinon.stub(shakaInstance, 'preload').resolves(preloadResult);
      const destroy = sinon.spy(preloadResult, 'destroy');
      const waitForFinish = sinon.stub(preloadResult, 'waitForFinish').resolves({});

      assetCache.init(shakaInstance);
      assetCache.add('abc');
      expect(assetCache.get('abc')).to.not.equal(null);

      assetCache.remove('abc');
      expect(assetCache.get('abc')).to.equal(null);

      setTimeout(() => {
        expect(preload).to.have.been.calledOnce;
        expect(waitForFinish).to.have.been.calledOnce;
        expect(destroy).to.have.been.calledOnce;
        done();
      });
    });
  });
  describe('init', () => {
    it('should add queued items to cache', () => {
      const preload = sinon.stub(shakaInstance, 'preload').resolves({});
      assetCache.add('abc');
      assetCache.add('def');
      expect(assetCache.list().length).to.equal(0);
      assetCache.init(shakaInstance);
      expect(assetCache.list().length).to.equal(2);
    });
    it('should remove all items from cache', () => {
      const preload = sinon.stub(shakaInstance, 'preload').resolves({});
      assetCache.init(shakaInstance);
      assetCache.add('abc');
      assetCache.add('def');
      expect(assetCache.list().length).to.equal(2);
      assetCache.init(shakaInstance);
      expect(assetCache.list().length).to.equal(0);
    });
  });
});

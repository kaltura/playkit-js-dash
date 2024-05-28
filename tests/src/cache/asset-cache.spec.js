import { AssetCache } from "../../../src/cache/asset-cache";

describe.only('AssetCache', () => {
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
            get = sinon.spy(assetCache, "get");
        });
        it('should return null if asset was not added', () => {
            expect(assetCache.get("abc")).to.equal(null);
        });
        it('should return null if asset was added but shaka is not set', () => {
            assetCache.add("abc");
            expect(assetCache.get("abc")).to.equal(null);
        });
        it('should return the asset promise if asset was added and shaka is set', done => {
            sinon.stub(shakaInstance, "preload").resolves("def");
            assetCache.init(shakaInstance);
            assetCache.add("abc");
            assetCache.get("abc").then(result => {
                expect(result).to.equal("def");
                done();
            });
        })
    });

    describe('list', () => {
        it('should list all queued assets, without duplicates, if shaka is not set', () => {
            assetCache.add("abc");
            assetCache.add("abc");
            assetCache.add("def");

            const listResult = assetCache.list();
            expect(listResult.length).to.equal(2);
            expect(listResult.findIndex(i => i === "abc")).to.not.equal(-1);
            expect(listResult.findIndex(i => i === "def")).to.not.equal(-1);
        });
        it('should list all cached assets, without duplicates, if shaka is set', () => {
            sinon.stub(shakaInstance, "preload").resolves({});
            assetCache.init(shakaInstance);

            assetCache.add("abc");
            assetCache.add("abc");
            assetCache.add("def");

            const listResult = assetCache.list();
            expect(listResult.length).to.equal(2);
            expect(listResult.findIndex(i => i === "abc")).to.not.equal(-1);
            expect(listResult.findIndex(i => i === "def")).to.not.equal(-1);
        });
    })

    // describe('remove');
    // describe('removeAll');
    // describe('reset');
});

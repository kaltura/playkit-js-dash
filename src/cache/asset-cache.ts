class AssetCache {
  private shakaInstance: shaka.Player | null = null;

  private cacheQueue = new Set<string>();
  private cache = new Map<string, any>();

  public init(shakaInstance: shaka.Player) {
    // TODO when to reset shaka ? when video element is destroyed ?
    this.shakaInstance = null;
    this.clearCache();
    this.shakaInstance = shakaInstance;
    this.preloadAssets();
  }

  public add(assetUrl: string) {
    console.log('>>> asset cache add', assetUrl);
    if (this.cache.has(assetUrl)) return;

    this.cacheQueue.add(assetUrl);
    this.preloadAssets();
  }

  public get(assetUrl: string): Promise<any> | null {
    console.log('>>> asset cache get', assetUrl);

    return this.cache.get(assetUrl) || null;
  }

  public list(): string[] {
    // if (this.cacheQueue.size) {
    //   return [...this.cacheQueue];
    // }
    return [...this.cache.keys()];
  }

  public remove(assetUrl: string, destroy: boolean = false) {
    if (this.cacheQueue.has(assetUrl)) {
      this.cacheQueue.delete(assetUrl);
    } else if (this.cache.has(assetUrl)) {
      const assetPromise = this.cache.get(assetUrl);
      if (destroy) {
        assetPromise.then(preloadMgr => preloadMgr.destroy());
      }
      this.cache.delete(assetUrl);
    }
  }

  private clearCache() {
    const assetUrls = this.cache.keys();
    for (const assetUrl of assetUrls) {
      this.remove(assetUrl, true);
    }
  }

  private preloadAssets() {
    if (!this.shakaInstance) return;

    // TODO test this
    for (const assetUrl of this.cacheQueue) {
      this.cache.set(assetUrl, this.shakaInstance.preload(assetUrl));
      this.cacheQueue.delete(assetUrl);
    }
  }
}

export {AssetCache};

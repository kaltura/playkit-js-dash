class AssetCache {
  private shakaInstance: shaka.Player | null = null;

  private cacheQueue = new Set<string>();
  private cache = new Map<string, any>();

  public init(shakaInstance: shaka.Player): void {
    this.clearCache();
    this.shakaInstance = shakaInstance;
    this.preloadAssets();
  }

  public add(assetUrl: string): void {
    if (this.cache.has(assetUrl)) return;

    this.cacheQueue.add(assetUrl);
    this.preloadAssets();
  }

  public get(assetUrl: string): Promise<any> | null {
    return this.cache.get(assetUrl) || null;
  }

  public list(): string[] {
    return [...this.cache.keys()];
  }

  public remove(assetUrl: string): void {
    if (this.cacheQueue.has(assetUrl)) {
      this.cacheQueue.delete(assetUrl);
    } else if (this.cache.has(assetUrl)) {
      const assetPromise = this.cache.get(assetUrl);
      this.cache.delete(assetUrl);

      assetPromise?.then(preloadMgr => {
        preloadMgr.waitForFinish().finally(() => {
          preloadMgr.destroy();
        });
      });
    }
  }

  public remove2(url: string): void {
    this.cacheQueue.delete(url);
    this.cache.delete(url);
  }

  private clearCache(): void {
    const assetUrls = this.cache.keys();
    for (const assetUrl of assetUrls) {
      this.remove(assetUrl);
    }
  }

  private preloadAssets(): void {
    if (!this.shakaInstance) return;

    for (const assetUrl of this.cacheQueue) {
      this.cache.set(assetUrl, this.shakaInstance.preload(assetUrl));
      this.cacheQueue.delete(assetUrl);
    }
  }
}

export {AssetCache};

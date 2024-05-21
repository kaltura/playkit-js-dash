class AssetCache {
  private shakaInstance: shaka.Player | null = null;

  private preloadQueue: string[] = [];
  private preloadPromiseMap = new Map<string, any>();

  public init(shakaInstance: shaka.Player) {
    this.reset();
    this.shakaInstance = shakaInstance;
    this.preloadAssets();
  }

  public add(assetUrl: string) {
    // TODO dont add the same url twice

    this.preloadQueue.push(assetUrl);
    this.preloadAssets();
  }

  public get(assetUrl: string): Promise<any> | null {
    return this.preloadPromiseMap.get(assetUrl) || null;
  }

  public list(): string[] {
    if (this.preloadQueue.length) {
      return this.preloadQueue;
    }
    return [...this.preloadPromiseMap.keys()];
  }

  public remove(assetUrl: string, destroy: boolean = false) {
    const index = this.preloadQueue.findIndex(item => item === assetUrl);
    if (index !== -1) {
      this.preloadQueue.splice(index, 1);
    } else if (this.preloadPromiseMap.has(assetUrl)) {
      const assetPromise = this.preloadPromiseMap.get(assetUrl);
      // TODO
      if (!destroy) {
        assetPromise.then(loader => loader.destroy());
      }
      this.preloadPromiseMap.delete(assetUrl);
    }
  }

  public removeAll() {
    this.preloadQueue = [];
    const assetUrls = this.preloadPromiseMap.keys();
    for (const assetUrl of assetUrls) {
      this.remove(assetUrl, true);
    }
  }

  public reset() {
    this.removeAll();
    this.shakaInstance = null;
  }

  private preloadAssets() {
    if (!this.shakaInstance) return;

    while (this.preloadQueue.length) {
      const assetUrl = this.preloadQueue.pop() as string;
      this.preloadPromiseMap.set(assetUrl, this.shakaInstance.preload(assetUrl));
    }
  }
}

export {AssetCache};

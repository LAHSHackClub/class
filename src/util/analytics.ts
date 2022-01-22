
class AnalyticsInstance {
  private posted = false;
  
  async increment(campaignExt: string = "") {
    if (this.posted) return;
    this.posted = true;
  
    console.log("analytics: increment");
    const campaign = campaignExt ? `-${campaignExt}` : "";
    await fetch("https://analytics.lahs.plus/v1/campaign/classes" + campaign, { method: "POST", mode: "no-cors" });
  
    setTimeout(() => {
      this.posted = false;
    }, 300);
  }
}

export const analytics = new AnalyticsInstance();
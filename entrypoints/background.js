import { browser } from 'wxt/browser'

export default defineBackground(() => browser.action.onClicked.addListener(
  async () => {
    browser.storage.local.set({ enabled: !(await browser.storage.local.get(['enabled'])).enabled })
  }
));

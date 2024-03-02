import { browser } from 'wxt/browser'

export default defineContentScript({
  matches: ['<all_urls>'],
  main(ctx) {
    browser.storage.onChanged.addListener((changes, area) => {
      if (area !== 'local') {
        return
      }
      console.log(changes.enabled?.newValue)
      if (changes.enabled?.newValue) {
        document.body.classList.add('foo')
      } else {
        document.body.classList.remove('foo')
      }
    })
  },
});
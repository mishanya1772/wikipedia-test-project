import { Page } from 'playwright-core'

export const ContextHelper = {
  _page: null as unknown as Page,

  set page(page: Page) {
    this._page = page
  },

  get page() {
    return this._page
  }
}

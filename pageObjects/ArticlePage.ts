import { BasePage } from './BasePage';
import { Component, Input } from '../components';

export class ArticlePage extends BasePage {
  public readonly languageDropdownIcon = new Input({ selector: '.vector-page-titlebar .mw-interlanguage-selector' })
  public readonly languageDropdownSearch = new Input({ selector: '.languagefilter' })
  public readonly languageDropdownList = new Input({ selector: '[data-region="all"]' })
  public readonly editArticleBtn = new Component({ selector: '[id="ca-edit"]' })
  public readonly windowContent = new Component({ selector: '.oo-ui-window-content-ready' })
  public readonly wikiEditorField = new Input({ selector: '.wikiEditor-ui-text' })

  get windowContentElements() {
    return this.windowContent.element.locator('.oo-ui-labelElement-label')
  }
}

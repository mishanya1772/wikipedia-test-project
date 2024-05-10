import { Component, Input } from '../components';
import { ContextHelper } from '../helpers/context.helper';
import { Page } from 'playwright-core';

export class BasePage {
  public readonly url = 'https://en.wikipedia.org'
  public readonly mainLogo = new Component({ selector: '.mw-wiki-logo' })
  public readonly pageHeader = new Component({ selector: '[id="firstHeading"]' })
  public readonly burgerOptions = new Input({ selector: '[id="vector-main-menu"]' })
  public readonly burgerIcon = new Component({ selector: '[id="vector-main-menu-dropdown-checkbox"]' })
  public readonly loginLink = new Component({ selector: '#pt-login-2 span' })
  public readonly userProfileIcon = new Component({ selector: '[id="vector-user-links-dropdown-checkbox"]' })
  public readonly searchField = new Input({ selector: '.vector-typeahead-search-container [name="search"]' })
  public readonly searchResultList = new Input({ selector: '[aria-label="Search results"]' })

  get page(): Page {
    return ContextHelper.page;
  }

  async open(subdirectory: string = '') {
    return this.page.goto(this.url + subdirectory)
  }
}

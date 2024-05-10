import { ContextHelper } from '../helpers/context.helper';
import { Locator } from '@playwright/test';

export class Component {
  constructor(public props: {selector: string}) {
    this.props = props;
  }

  get selector(): string {
    return this.props.selector;
  }

  get element(): Locator {
    return ContextHelper.page.locator(this.selector);
  }

  async click(): Promise<void> {
    return this.element.click();
  }

  async clickByName(name: string) {
    return this.element.getByRole('button', { name }).click()
  }
}

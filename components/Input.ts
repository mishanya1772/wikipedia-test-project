import { Component } from '.';
export class Input extends Component {
  async setText(text: string): Promise<void> {
    return this.element.fill(text);
  }

  get list() {
    return this.element.locator('li')
  }

  option(option: string = '') {
    return this.list.filter({ hasText: option }).first()
  }
}

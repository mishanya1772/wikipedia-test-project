import { Component, Input } from '../components';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  public readonly url = 'https://en.wikipedia.org'
  public readonly userNameField = new Input({ selector: '[id="wpName1"]' })
  public readonly passwordField = new Input({ selector: '[id="wpPassword1"]' })
  public readonly loginBtn = new Component({ selector: '[id="wpLoginAttempt"]' })
}

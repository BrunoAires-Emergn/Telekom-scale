import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';
import { isNaN } from 'lodash';

@Component({
  tag: 'scale-notification-badge',
  styleUrl: './notification-badge.css',
  shadow: true,
})
export class NotificationBadge {
  /** (optional) Text that is displayed in the badge*/
  @Prop() label: string | number;
  @Prop() maxCharacters: number = 3;
  @Prop() type: 'icon' | 'text' = 'icon';

  getLabel() {
    if (this.label) {
      if (!isNaN(this.label)) {
        let labelNumber = '' + this.label;
        if (labelNumber.length > this.maxCharacters) {
          const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
          const tier = Math.floor(Math.log10(Number(this.label)) / 3) || 0;
          if (tier > 0) {
            const scaled = Number(this.label) / Math.pow(10, tier * 3);
            labelNumber = scaled.toFixed(1).replace('.0', '') + SI_SYMBOL[tier];
          }
        }
        return labelNumber;
      } else {
        let labelString = String(this.label);
        if (labelString.length > this.maxCharacters) {
          labelString = labelString.substring(0, this.maxCharacters);
          labelString += '...';
        }
        return labelString;
      }
    }
  }

  render() {
    return (
      <Host>
        <div class={this.getCssBorderClassMap()} tabIndex={0}>
          <a class={this.getCssClassMap()}>
            <slot />
            <span class="notification-badge__circle">{this.getLabel()}</span>
          </a>
        </div>
      </Host>
    );
  }
  getCssClassMap() {
    return classNames(
      `notification-badge`,
      this.label && `notification-badge--label`,
      this.type && `notification-badge--${this.type}`
    );
  }

  getCssBorderClassMap() {
    return classNames(
      `notification-badge_border`,
      this.label && `notification-badge_border--label`,
      this.type && `notification-badge_border--${this.type}`
    );
  }
}
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import { IImageProps } from 'office-ui-fabric-react/lib/Image';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';

export interface ITeachingBubbleIllustrationExampleState {
  isTeachingBubbleVisible?: boolean;
}

export class TeachingBubbleIllustrationExample extends React.Component<{}, ITeachingBubbleIllustrationExampleState> {
  private _menuButtonElement: HTMLElement;

  public constructor(props: {}) {
    super(props);

    this._onDismiss = this._onDismiss.bind(this);

    this.state = {
      isTeachingBubbleVisible: false,
    };
  }

  public render() {
    const { isTeachingBubbleVisible } = this.state;
    const exampleImageProps: IImageProps = { src: 'http://placehold.it/364x140' };
    const examplePrimaryButton: IButtonProps = {
      children: 'Try it out',
    };
    const exampleSecondaryButtonProps: IButtonProps = {
      children: 'May be later',
      onClick: this._onDismiss
    };

    return (
      <div className='ms-TeachingBubbleExample'>
        <span className='ms-TeachingBubbleBasicExample-buttonArea' ref={ (menuButton) => this._menuButtonElement = menuButton! }>
          <DefaultButton
            onClick={ this._onDismiss }
            text={ isTeachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }
          />
        </span>
        { isTeachingBubbleVisible ? (
          <div>
            <TeachingBubble
              illustrationImage={ exampleImageProps }
              targetElement={ this._menuButtonElement }
              primaryButtonProps={ examplePrimaryButton }
              secondaryButtonProps={ exampleSecondaryButtonProps }
              onDismiss={ this._onDismiss }
              headline='Discover what’s trending around you'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?
            </TeachingBubble>
          </div>
        ) : (null) }
      </div>
    );
  }

  private _onDismiss(ev: any) {
    this.setState({
      isTeachingBubbleVisible: !this.state.isTeachingBubbleVisible
    });
  }
}

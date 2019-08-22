/**
 * @file Panel v2 stories.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';

import { withA11y } from '@storybook/addon-a11y';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React, { Fragment } from 'react';

import { experimental } from '../../../.storybook';

import { label } from '../_mocks_';
import { header, profile, toolbar } from '../Shell/_mocks_';
import { labels } from './_mocks_';

import { Button, PanelV2, PanelV2Content, Shell } from '../..';

const closeButtonLabel = 'Close';

const props = {
  title: label,
  subtitle: label,
  labels,
};

const content =
  'Use the `PanelV2Content` component to have the appropriate formatting applied to content';

storiesOf(experimental('PanelV2'), module)
  .addDecorator(withA11y)
  .add(
    'Default',
    () => {
      class PanelV2Story extends React.Component {
        state = { firstOpen: false, secondOpen: false, thirdOpen: false };
        closeFirst = () => {
          this.setState({ firstOpen: false });
        };
        closeSecond = () => {
          this.setState({ secondOpen: false });
        };
        closethird = () => {
          this.setState({ thirdOpen: false });
        };
        openFirst = () => {
          this.setState({ firstOpen: true });
        };
        openSecond = () => {
          this.setState({ secondOpen: true });
        };
        openThird = () => {
          this.setState({ thirdOpen: true });
        };

        render() {
          return (
            <Fragment>
              <Shell header={header} profile={profile} toolbar={toolbar} />
              <div id="main" style={{ paddingLeft: '5rem' }}>
                <Button key="b1" onClick={this.openFirst}>
                  Primary and secondary action
                </Button>
                <Button key="b2" onClick={this.openSecond}>
                  Primary action
                </Button>
                <Button key="b3" onClick={this.openThird}>
                  Default
                </Button>
              </div>
              <PanelV2
                key="p1"
                isOpen={this.state.firstOpen}
                {...props}
                closeButton={{
                  onClick: this.closeFirst,
                  label: text('closeButton.label', closeButtonLabel),
                }}
                footer={
                  <Fragment>
                    <Button
                      id="p1_secondary-button"
                      kind="secondary"
                      onClick={this.closeFirst}
                    >
                      Close
                    </Button>
                    <Button
                      id="p1_primary-button"
                      onClick={this.closeFirst}
                      renderIcon={Add16}
                    >
                      Add
                    </Button>
                  </Fragment>
                }
              >
                <PanelV2Content>{content}</PanelV2Content>
              </PanelV2>
              <PanelV2
                key="p2"
                isOpen={this.state.secondOpen}
                {...props}
                closeButton={{
                  onClick: this.closeSecond,
                  label: text('closeButton.label', closeButtonLabel),
                }}
                footer={
                  <Button id="p2_primary-button" onClick={this.closeSecond}>
                    Add
                  </Button>
                }
              />
              <PanelV2
                key="p3"
                isOpen={this.state.thirdOpen}
                {...props}
                closeButton={{
                  onClick: this.closethird,
                  label: closeButtonLabel,
                }}
              >
                <PanelV2Content>{content}</PanelV2Content>
              </PanelV2>
            </Fragment>
          );
        }
      }
      return <PanelV2Story />;
    },
    {
      info: {
        text: `
        The \`PanelV2\` is an experimental component that is subject to change while it is being tested. If you need a stable component, please use the \`Panel\` instead.
      `,
      },
    }
  );
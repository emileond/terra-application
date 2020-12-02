import React from 'react';
import PropTypes from 'prop-types';
import { KEY_ESCAPE } from 'keycode-js';

import LayerPortal from '../layers/LayerPortal';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import { ApplicationIntlContext } from '../application-intl';
import { PageContainer } from '../page';
import { deferExecution } from '../utils/lifecycle-utils';

import ModalContent from './_ModalContent';
import PageContext from '../page/private/PageContext';

const propTypes = {
  title: PropTypes.string,
  toolbar: PropTypes.element,
  footer: PropTypes.element,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    PropTypes.shape({
      height: PropTypes.oneOf([240, 420, 600, 870, 960]),
      width: PropTypes.oneOf([320, 640, 960, 1280, 1600]),
    }),
  ]),
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  renderPage: PropTypes.func,
  dangerouslyDisableNavigationPromptHandling: PropTypes.bool,
  onInert: PropTypes.func,
};

const ApplicationModal = ({
  title,
  toolbar,
  footer,
  size,
  onRequestClose,
  children,
  renderPage,
  dangerouslyDisableNavigationPromptHandling,
  onInert,
}) => {
  const navigationPromptCheckpointRef = React.useRef();
  const modalContainerRef = React.useRef();
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const [isInert, setIsInert] = React.useState(false);

  const safeRequestClose = React.useCallback(() => {
    if (dangerouslyDisableNavigationPromptHandling) {
      onRequestClose();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onRequestClose();
    });
  }, [dangerouslyDisableNavigationPromptHandling, onRequestClose, applicationIntl]);

  React.useLayoutEffect(() => {
    deferExecution(() => {
      // Handle focus shift for VoiceOver on iOS
      if ('ontouchstart' in window) {
        modalContainerRef.current.querySelector('[data-terra-abstract-modal-begin]').focus();
      } else {
        // Shift focus to modal dialog
        modalContainerRef.current.focus();
      }
    });
  }, []);

  React.useEffect(() => {
    if (isInert) {
      return undefined;
    }

    function handleKeydown(e) {
      if (e.keyCode === KEY_ESCAPE) {
        const body = document.querySelector('body');
        if (e.target === modalContainerRef.current || modalContainerRef.current.contains(e.target) || e.target === body) {
          safeRequestClose();
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [safeRequestClose, isInert]);

  React.useEffect(() => {
    if (onInert) {
      onInert(isInert);
    }
  }, [isInert, onInert]);

  return (
    <PageContext.Provider value={undefined}>
      <LayerPortal
        type="modal"
        setInert={setIsInert}
      >
        <NavigationPromptCheckpoint
          ref={navigationPromptCheckpointRef}
        >
          <ModalContent
            refCallback={(ref) => { modalContainerRef.current = ref; }}
            title={title}
            toolbar={toolbar}
            footer={footer}
            size={size}
            onRequestClose={safeRequestClose}
          >
            {renderPage ? (
              <PageContainer>
                {renderPage()}
              </PageContainer>
            ) : children}
          </ModalContent>
        </NavigationPromptCheckpoint>
      </LayerPortal>
    </PageContext.Provider>
  );
};

ApplicationModal.propTypes = propTypes;

export default ApplicationModal;

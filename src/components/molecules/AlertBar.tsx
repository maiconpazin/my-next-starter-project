import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  AlertColor,
  IconButton,
  Slide,
  Snackbar,
  SnackbarOrigin,
} from '@mui/material';
import { FC, ReactNode } from 'react';

export interface AlertBarProps {
  message: ReactNode;
  onClose?: () => void;
  severity?: AlertColor;
  vertical?: SnackbarOrigin['vertical'];
  horizontal?: SnackbarOrigin['horizontal'];
  autoHideSeconds?: number;
  transitionSeconds?: number;
}

const AlertBar: FC<AlertBarProps> = ({
  message,
  severity = 'info',
  vertical = 'bottom',
  horizontal = 'center',
  onClose,
  autoHideSeconds = 5,
  transitionSeconds = 0.5,
}) => {
  return message ? (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={!!message}
      onClose={onClose}
      autoHideDuration={autoHideSeconds * 1000}
      TransitionComponent={(props) => <Slide {...props} direction='up' />}
      transitionDuration={transitionSeconds * 1000}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={onClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant='filled'
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  ) : null;
};

export default AlertBar;

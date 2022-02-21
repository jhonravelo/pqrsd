import React, { Fragment, useCallback, useState, useEffect } from 'react';
import withWidth from '@material-ui/core/withWidth';
import PhoneVerificationDialog from '../Dialogs/PhoneVerificationDialog';

const PhoneValidation = ({
  setAlert,
  phoneUpdate,
  setPhoneUpdate,
  phone,
  phoneCountryCode,
  successCallback = null
}) => {
  // * STATE HOOKS
  const [phoneVerificationDialog, setPhoneVerificationDialog] = useState(null);

  // * FUNCTIONS

  const handleVerificationDialog = useCallback(
    async isDialogOpen => {
      setPhoneUpdate({
        submit: isDialogOpen
      });
      setPhoneVerificationDialog(isDialogOpen);
    },
    [setPhoneVerificationDialog, setPhoneUpdate]
  );

  useEffect(() => {
    if (!phoneUpdate.submit) {
      return;
    }
    setPhoneVerificationDialog(true);
  }, [phoneUpdate.submit]);

  if (!phoneUpdate.submit) {
    return <Fragment></Fragment>;
  }

  return (
    <Fragment>
      {phoneVerificationDialog && (
        <PhoneVerificationDialog
          title="Validar número celular"
          open={phoneVerificationDialog}
          formPhone={phone}
          formPhoneCountryCode={phoneCountryCode}
          setDialog={handleVerificationDialog}
          successCallback={successCallback}
          setAlert={setAlert}
        />
      )}
    </Fragment>
  );
};

export default withWidth()(PhoneValidation);

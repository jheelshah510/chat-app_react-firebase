import React from 'react';
import { Button, Drawer, Icon } from 'rsuite';
import Dashboard from '.';
import { useModalState } from '../../misc/custom-hooks';

const DashboardToggle = () => {
  const { isOpen, open, close } = useModalState();
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />
        <Drawer show={isOpen} onHide={close} placement="left">
          <Dashboard />
        </Drawer>
      </Button>
    </>
  );
};

export default DashboardToggle;

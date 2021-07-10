import React from 'react';
import PropTypes from 'prop-types';
import { Row, UserInfo } from '../styled-components/UserList';

export const UserRow = ({
  id, name, username, address, email, phone
}) => (
  <Row key={id}>
    <UserInfo>
      <span>{`Name: ${name}`}</span>
      <span>{`Username: ${username}`}</span>
    </UserInfo>
    <div>
      <div>
        <span>{address.street}</span>
        <span>{address.suite}</span>
        <span>{address.city}</span>
        <span>{address.zipcode}</span>
      </div>
      <div>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </div>
  </Row>
);

UserRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

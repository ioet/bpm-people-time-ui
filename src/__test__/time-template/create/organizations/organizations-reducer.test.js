import expect from 'expect';
import organizationsList from '../../../../component/time-template/create/organizations/organizations-reducer';
import { ADD_ORGANIZATIONS } from '../../../../component/time-template/create/organizations/organizations-actions';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('organizationsList reducer', () => {
  it('returns the initial state', () => {
    expect(organizationsList({}, initialStateAction))
      .toEqual({});
  });

  it('handles add organizations', () => {
    const someOrganization = {
      id: 'someId',
      name: 'organization name',
    };
    const someOtherOrganization = {
      id: 'someOtherId',
      name: 'organization name',
    };

    const addMultipleOrganizationsAction = {
      type: ADD_ORGANIZATIONS,
      organizations: [someOrganization, someOtherOrganization],
    };

    expect(organizationsList({}, addMultipleOrganizationsAction))
      .toEqual({
        [someOrganization.id]: someOrganization,
        [someOtherOrganization.id]: someOtherOrganization,
      });
  });
});

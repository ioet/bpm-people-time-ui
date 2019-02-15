import expect from 'expect';
import projectsList from '../../../../component/time-template/create/projects/projects-reducer';
import { ADD_PROJECTS } from '../../../../component/time-template/create/projects/projects-actions';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('projectsList reducer', () => {
  it('returns the initial state', () => {
    expect(projectsList({}, initialStateAction))
      .toEqual({});
  });

  it('handles add projects', () => {
    const someProject = {
      uid: 'someId',
      short_name: 'project name',
    };
    const someOtherProject = {
      uid: 'someOtherId',
      short_name: 'project name',
    };

    const addMultipleProjectsAction = {
      type: ADD_PROJECTS,
      projects: [someProject, someOtherProject],
    };

    expect(projectsList({}, addMultipleProjectsAction))
      .toEqual({
        [someProject.uid]: someProject,
        [someOtherProject.uid]: someOtherProject,
      });
  });
});

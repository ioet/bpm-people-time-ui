import expect from 'expect';
import { ADD_SKILLS } from '../../../../component/time-template/create/skills/skills-actions';
import skillsList from '../../../../component/time-template/create/skills/skills-reducer';

const INITIAL_STATE = '@@INIT';

const initialStateAction = {
  type: INITIAL_STATE,
};

describe('skillsList reducer', () => {
  it('returns the initial state', () => {
    expect(skillsList({}, initialStateAction))
      .toEqual({});
  });

  it('handles add skills', () => {
    const someSkill = {
      id: 'someId',
      name: 'skill name',
    };
    const someOtherSkill = {
      id: 'someOtherId',
      name: 'skill name',
    };

    const addMultipleSkillsAction = {
      type: ADD_SKILLS,
      skills: [someSkill, someOtherSkill],
    };

    expect(skillsList({}, addMultipleSkillsAction))
      .toEqual({
        [someSkill.id]: someSkill,
        [someOtherSkill.id]: someOtherSkill,
      });
  });
});

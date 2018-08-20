import React from 'react';

import {
  Intro,
  IntroWrapper,
  SampleTasks,
  SampleTasksUl,
  Tagline
} from './tasksIntro.style';

export const TasksIntro = () => (
  <IntroWrapper>
    <Tagline>Your Needs. Your Action Plan.</Tagline>
    <Intro>
      Think about what basic supports you would need should you reach a point
      when your mental health is not great, and you are not able to take care of
      these things yourself. Contact each person in your support network
      (friend, family, colleague, neighbour?), and the enter the tasks you have
      discussed with them. Should you reach that point when you need to activate
      this plan, you will click one button, and an email will be sent to each
      person in your plan, requesting their help.
    </Intro>
    <SampleTasks>Task ideas to get you started:</SampleTasks>
    <SampleTasksUl>
      <li>Buy groceries</li>
      <li>Prepare healthy meals</li>
      <li>Do laundry</li>
      <li>Clean kitchen</li>
      <li>Walk the dog</li>
      <li>Feed the cats</li>
      <li>Take the children to school</li>
      <li>Help me pay bills</li>
      <li>Take me to my therapy appointment</li>
    </SampleTasksUl>
  </IntroWrapper>
);

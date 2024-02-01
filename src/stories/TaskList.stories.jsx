import * as TaskStories from './Task.stories';
import TaskList from './TaskList';

export default {
  component: TaskList,
  title: 'TaskList',
  tags: ['autodocs'],
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

export const Default = {
  args: {
    tasks: [
      { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
      { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
      { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
      { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
      { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    ],
  },
};

export const WithPinnedTask = {
  args: {
    tasks: [
      ...Default.args.tasks,
      { id: 6, title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};

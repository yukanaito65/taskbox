import PropTypes from 'prop-types';
import Task from './Task';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
}

export const Default = {
    args: {
        task: {
            id: 1,
            title: 'Test Task',
            tags: 'TASK_INBOX',
        },
    },
}

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            tags: 'TASK_PINNED',
        },
    },
}

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            tags: 'TASK_ARCHIVED',
        },
    },
}

Task.PropTypes = {
    task: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}

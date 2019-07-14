import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormWithHooks from '../FormWithHooks';
import { useForm } from 'hooks';

jest.mock('hooks/useForm');
jest.mock('components/Stringify/Stringify', () => () => null);
jest.mock('components/Form/Form', () => ({
    __esModule: true,
    default: mockComponent('Form'),
    PostList: mockComponent('PostList'),
    CommentInput: mockComponent('CommentInput'),
}));

const getMockedUseForm = (args = {}) => ({
    selectedUser: 'mock-selectedUser',
    selectedPost: 'mock-selectedPost',
    comment: 'mock-comment',
    error: 'mock-error',
    users: 'mock-users',
    posts: [{ userId: 'mock-selectedUser', id: 'mock-selectedPost' }],
    comments: [{ postId: 'mock-selectedPost' }],
    isLoading: false,
    isSending: 'isSending',
    onUserChange: 'mock-onUserChange',
    onPostChange: 'mock-onPostChange',
    onCommentChange: 'mock-onCommentChange',
    onSubmit: 'mock-onSubmit',
    ...args,
});

describe('<FormWithHooks />', () => {
    it('should render loader when form is loading', () => {
        useForm.mockImplementation(() => getMockedUseForm({ isLoading: true }));

        const component = mount(<FormWithHooks />);

        expect(component.find('.form--loading')).toHaveLength(1);
    });

    it('renders correctly', () => {
        useForm.mockImplementation(getMockedUseForm);

        const component = mount(<FormWithHooks />);

        expect(toJson(component)).toMatchInlineSnapshot(`
            <FormWithHooks>
              <Form
                onUserChange="mock-onUserChange"
                selectedUser="mock-selectedUser"
                users="mock-users"
              >
                <PostList
                  comments={
                    Array [
                      Object {
                        "postId": "mock-selectedPost",
                      },
                    ]
                  }
                  id="mock-selectedPost"
                  isOpen={true}
                  key="mock-selectedPost"
                  onChange="mock-onPostChange"
                  userId="mock-selectedUser"
                >
                  <CommentInput
                    error="mock-error"
                    isOpen={true}
                    isSending="isSending"
                    onChange="mock-onCommentChange"
                    onSubmit="mock-onSubmit"
                  />
                </PostList>
              </Form>
              <Component
                indent={2}
              />
            </FormWithHooks>
        `);
    });
});

import { renderHook, act } from '@testing-library/react-hooks';

import useForm from '../useForm';
import Api from 'api';

jest.mock('api/Api.js', () => ({
    subscribeComments: jest.fn(),
    unsubscribeComments: jest.fn(),
    getUsers: jest.fn().mockReturnValue(new Promise(r => {})),
    getPosts: jest.fn().mockReturnValue(new Promise(r => {})),
}));

describe('useForm', () => {
    afterEach(() => {
        Api.subscribeComments.mockClear();
        Api.unsubscribeComments.mockClear();
        Api.getUsers.mockClear();
        Api.getPosts.mockClear();

        // Restore mock promise returning
        Api.getUsers.mockReturnValue(new Promise(r => {}));
        Api.getPosts.mockReturnValue(new Promise(r => {}));
    });

    it('should return initial state and callbacks', () => {
        const { result } = renderHook(useForm);

        expect(result.current.onUserChange).toBeInstanceOf(Function);
        expect(result.current.onPostChange).toBeInstanceOf(Function);
        expect(result.current.onCommentChange).toBeInstanceOf(Function);
        expect(result.current.onSubmit).toBeInstanceOf(Function);
        expect(result.current).toMatchObject({
            selectedUser: null,
            selectedPost: null,
            comment: null,
            error: null,
            users: [],
            posts: [],
            comments: [],
            isLoading: true,
            isSending: false,
        });
    });

    it('should call Api.subscribeComments on mount', () => {
        expect(Api.subscribeComments).not.toHaveBeenCalled();

        renderHook(useForm);

        expect(Api.subscribeComments).toHaveBeenCalledTimes(1);
    });

    it('should call Api.unsubscribeComments on unmount', () => {
        const { unmount } = renderHook(useForm);
        expect(Api.unsubscribeComments).not.toHaveBeenCalled();

        unmount();
        expect(Api.unsubscribeComments).toHaveBeenCalledTimes(1);
    });

    it('should add comments when Api receives new comment', () => {
        const comment = 'Mock comment';
        const subscriberRef = {};
        Api.subscribeComments.mockImplementation(subscriber => {
            subscriberRef.current = subscriber;
        });

        const { result } = renderHook(useForm);
        act(() => subscriberRef.current(comment));

        expect(result.current.comments).toMatchObject([comment]);
    });

    it('should fetch users and posts from Api on mount and set results to state ', async () => {
        const users = ['user1', 'user2'];
        const posts = ['post1', 'post2'];
        Api.getUsers.mockImplementation(() => new Promise(r => r(users)));
        Api.getPosts.mockImplementation(() => new Promise(r => r(posts)));

        expect(Api.getUsers).not.toHaveBeenCalled();
        expect(Api.getPosts).not.toHaveBeenCalled();

        const { result, waitForNextUpdate } = renderHook(useForm);
        expect(result.current.isLoading).toBe(true);
        await act(() => waitForNextUpdate());

        expect(Api.getUsers).toHaveBeenCalled();
        expect(Api.getPosts).toHaveBeenCalled();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.users).toMatchObject(users);
        expect(result.current.posts).toMatchObject(posts);
    });

    it('should set user when onUserChange is called', () => {
        const user = 'mock user';
        const { result } = renderHook(useForm);

        expect(result.current.selectedUser).toBe(null);

        act(() => result.current.onUserChange({ target: { value: user } }));
        expect(result.current.selectedUser).toBe(user);
    });

    it.todo('should set post when onPostChange is called');
    it.todo('should set comment when onCommentChange is called');

    it.todo('should reset error and comment when onUserChange is called');
    it.todo('should reset error and comment when onPostChange is called');
    it.todo('should reset error when onCommentChange is called');

    it.todo('should call event.preventDefault when onSubmit is called');
    it.todo('should set error when comment is missing and onSubmit is called');
    it.todo('should set isSending true when onSubmit is called');
    it.todo('should post form data to Api when onSubmit is called');
    it.todo('should set isSending false when form data is sent');
});

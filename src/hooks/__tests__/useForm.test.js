import { renderHook, act } from '@testing-library/react-hooks';

import useForm from '../useForm';
import Api from 'api';

jest.mock('api/Api.js', () => ({
    subscribeComments: jest.fn(),
    unsubscribeComments: jest.fn(),
    getUsers: jest.fn(),
    getPosts: jest.fn(),
}));

const getPendingPromise = () => new Promise(r => {});
const getResolvingPromise = data => new Promise(r => r(data));
const getRejectingPromise = error => new Promise((_, r) => r(error));

describe('useForm', () => {
    beforeEach(() => {
        Api.subscribeComments.mockClear();
        Api.unsubscribeComments.mockClear();
        Api.getUsers.mockClear();
        Api.getPosts.mockClear();

        Api.getUsers.mockReturnValue(getPendingPromise());
        Api.getPosts.mockReturnValue(getPendingPromise());
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
        const commentOne = 'mock-comment-1';
        const commentTwo = 'mock-comment-2';
        let broadcastComment;
        Api.subscribeComments.mockImplementation(subscriber => {
            broadcastComment = subscriber;
        });

        const { result } = renderHook(useForm);
        act(() => broadcastComment(commentOne));
        act(() => broadcastComment(commentTwo));

        expect(result.current.comments).toMatchObject([commentOne, commentTwo]);
    });

    it('should fetch users and posts from Api on mount and set results to state ', async () => {
        const users = ['user1', 'user2'];
        const posts = ['post1', 'post2'];
        Api.getUsers.mockReturnValue(getResolvingPromise(users));
        Api.getPosts.mockReturnValue(getResolvingPromise(posts));

        expect(Api.getUsers).not.toHaveBeenCalled();
        expect(Api.getPosts).not.toHaveBeenCalled();

        const { result, waitForNextUpdate } = renderHook(useForm);
        expect(result.current.isLoading).toBe(true);
        await act(waitForNextUpdate);

        expect(Api.getUsers).toHaveBeenCalled();
        expect(Api.getPosts).toHaveBeenCalled();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.users).toMatchObject(users);
        expect(result.current.posts).toMatchObject(posts);
    });

    it('should set user when onUserChange is called', () => {
        const value = 'mock-user';
        const { result } = renderHook(useForm);

        expect(result.current.selectedUser).toBe(null);

        act(() => result.current.onUserChange({ target: { value } }));
        expect(result.current.selectedUser).toBe(value);
    });

    it('should set post when onPostChange is called', () => {
        const value = 'mock-post';
        const { result } = renderHook(useForm);

        expect(result.current.selectedPost).toBe(null);

        act(() => result.current.onPostChange({ target: { value } }));
        expect(result.current.selectedPost).toBe(value);
    });

    it('should set comment when onCommentChange is called', () => {
        const value = 'mock-comment';
        const { result } = renderHook(useForm);

        expect(result.current.comment).toBe(null);

        act(() => result.current.onCommentChange({ target: { value } }));
        expect(result.current.comment).toBe(value);
    });

    it('should set error when comment is missing and onSubmit is called', () => {
        const { result } = renderHook(useForm);

        expect(result.current.error).toBe(null);
        act(() => result.current.onSubmit({ preventDefault: () => {} }));
        expect(result.current.error).toBe('Comment missing');
    });

    it('should call event.preventDefault when onSubmit is called', () => {
        const preventDefault = jest.fn();
        const { result } = renderHook(useForm);

        expect(result.current.error).toBe(null);
        act(() => result.current.onSubmit({ preventDefault }));
        expect(preventDefault).toHaveBeenCalled();
    });

    it.todo('should reset error and comment when onUserChange is called');
    it.todo('should reset error and comment when onPostChange is called');
    it.todo('should reset error when onCommentChange is called');

    it.todo('should set isSending true when onSubmit is called');
    it.todo('should post form data to Api when onSubmit is called');
    it.todo('should set isSending false when form data is sent');
});

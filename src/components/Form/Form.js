import React from 'react';
import classNames from 'classnames';

const BASE_CLASS = 'form';

const Form = ({ onUserChange, selectedUser, users, children }) => (
    <div className={`${BASE_CLASS}-wrapper`}>
        <form className={BASE_CLASS}>
            <UserSelect
                onChange={onUserChange}
                selectedUser={selectedUser}
                users={users}
            />

            {selectedUser && (
                <>
                    <label
                        htmlFor='posts'
                        className={`${BASE_CLASS}-select-label`}>
                        Posts
                    </label>
                    {children}
                </>
            )}
        </form>
    </div>
);

const UserSelect = ({ onChange, selectedUser, users }) => (
    <>
        <label htmlFor='user' className={`${BASE_CLASS}-select-label`}>
            User
        </label>
        <select
            id='user'
            className={`${BASE_CLASS}-select`}
            onChange={onChange}>
            {!selectedUser && <option>-- SELECT USER --</option>}

            {users.map(({ name, id }) => (
                <option key={id} value={id}>
                    {name}
                </option>
            ))}
        </select>
    </>
);

const PostList = ({
    id,
    title,
    body,
    isOpen,
    comments,
    onChange,
    children,
}) => (
    <>
        <ul className={`${BASE_CLASS}-list`}>
            <li
                key={id}
                className={classNames(
                    `${BASE_CLASS}-list-item`,
                    isOpen && 'open'
                )}>
                <h2
                    className={`${BASE_CLASS}-list-item-header`}
                    onClick={() => onChange({ target: { value: id } })}>
                    {title}
                </h2>

                <legend>Comments: {comments.length}</legend>

                <section className={`${BASE_CLASS}-list-item-body`}>
                    {body}
                </section>

                {comments.map(({ id, email, body }) => (
                    <section
                        key={id}
                        className={`${BASE_CLASS}-list-item-comment`}>
                        {email}: {body}}
                    </section>
                ))}
            </li>
        </ul>
        {children}
    </>
);

const CommentInput = ({ onSubmit, isOpen, onChange, isSending, error }) => (
    <section
        className={classNames(
            `${BASE_CLASS}-comment-input-wrapper`,
            isOpen && 'open'
        )}>
        <input
            type='text'
            className={`${BASE_CLASS}-comment-input`}
            invalid={error ? 'true' : 'false'}
            onChange={onChange}
        />
        {error}
        <button
            type='submit'
            onClick={onSubmit}
            disabled={isSending}
            className={`${BASE_CLASS}-btn--submit`}>
            {isSending ? 'Sending...' : 'Submit'}
        </button>
    </section>
);

export default Form;
export { PostList, CommentInput };

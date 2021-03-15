package com.godwin.exception;

/**
 * Created by admin on 2021/1/6.
 */
public class UsernameNotException extends ServiceException{
    public UsernameNotException() {
    }

    public UsernameNotException(String message) {
        super(message);
    }

    public UsernameNotException(String message, Throwable cause) {
        super(message, cause);
    }

    public UsernameNotException(Throwable cause) {
        super(cause);
    }

    public UsernameNotException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

package com.godwin.controller;

/**
 * Created by admin on 2021/1/6.
 */

import com.godwin.exception.*;
import com.godwin.utils.JsonResult;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * 控制器基类
 */

public abstract class BaseController {

    /**
     * 返回成功状态码2000
     */
    public static final int SUCCESS=2000;

    @ExceptionHandler({ServiceException.class, FileUploadException.class})
    public JsonResult<Void> handleException(Throwable ex) {

        JsonResult<Void> jsonResult=new JsonResult<>(ex);

        if(ex instanceof UsernameDuplicateException){
            //用户名被占用  -  2002
            jsonResult.setState(2002);
        }else if(ex instanceof UsernameNotFoundException){
            //用户名找不到  -  2003
            jsonResult.setState(2003);
        }else if(ex instanceof PasswordNotException){
            //密码错误
            jsonResult.setState(2004);
        }else if (ex instanceof UsernameNotException){
            //用户名错误
            jsonResult.setState(2005);
        }
        //返回响应值
        return jsonResult;
    }
}

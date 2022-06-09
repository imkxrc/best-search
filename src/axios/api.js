/*
 * @Author: ‘Yongsheng Huang 113082408@qq.com
 * @Date: 2022-06-08 09:54:39
 * @LastEditors: ‘Yongsheng Huang 113082408@qq.com
 * @LastEditTime: 2022-06-09 07:18:45
 * @FilePath: \best-search\src\axios\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from './request'
export const getPersonInfo = data => {
    return service({
        url: '/api/interview/keyword_search',
        method: 'post',
        data
    })
};
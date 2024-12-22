/*
 * @Author: quyue 10676114@qq.com
 * @Date: 2024-10-19 05:28:00
 * @LastEditors: quyue 10676114@qq.com
 * @LastEditTime: 2024-12-22 13:31:31
 * @FilePath: \amap_nav-main\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),basicSsl()],
  server: {
    host: '0.0.0.0', // 这个用于启动
    port: '8092', // 指定启动端口
    open: true //启动后是否自动打开浏览器
    }
})

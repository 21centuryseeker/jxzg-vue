/**
 * 基础工具类
 * 李珂
 * likenamehaojie@hotmail.com
 */
class Base {
  /**
   * 始终保持this指向是当前类
   * @param target
   * @returns {*}
   */
  static selfish (target) {
    const cache = new WeakMap()
    const handler = {
      get (target, key) {
        const value = Reflect.get(target, key)
        if (typeof value !== 'function') {
          return value
        }
        if (!cache.has(value)) {
          cache.set(value, value.bind(target))
        }
        return cache.get(value)
      }
    }
    const proxy = new Proxy(target, handler)
    return proxy
  }
}

export default Base

export function call() {
  function get(option: { url: string }) {
    return fetch(option.url).then((r) => r.json());
  }

  function post(option: { url: string }) {
    return fetch(option.url).then((r) => r.json());
  }

  function update(option: { url: string }) {
    return fetch(option.url).then((r) => r.json());
  }

  function del(option: { url: string }) {
    return fetch(option.url).then((r) => r.json());
  }
}

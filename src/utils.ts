const isIE: boolean = !!(document as any).documentMode;
const isEdge: boolean = /Edge/.test(navigator.userAgent);
const isMSBrowser: boolean = isIE || isEdge;

export { isIE, isEdge, isMSBrowser };

export const urlResolve = (from: string | URL, ...to: string[]): string | URL => {
  if (typeof to[0] === "undefined") {
    return from;
  }

  return urlResolve(new URL(to[0], from), ...to.slice(1));
};

export const sync = (request: string | Request, err?: string): Promise<Response> => {
  return fetch(request).then((response: Response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      const errorText = err || response.statusText || `${response.status}`;
      return Promise.reject(new Error(errorText));
    }
  });
};

export const round = (num: float, digits: int = 2): float => {
  const accuracy: int = Math.pow(10, digits);
  return Math.round(num * accuracy) / accuracy;
};

export const randomInt = (min: int, max: int): int =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomColor = () => `hsl(${randomInt(0, 360)}, 50%, 50%)`;

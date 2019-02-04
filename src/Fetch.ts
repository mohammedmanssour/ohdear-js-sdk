import Fetch from 'fetch-http-wrapper';
import FetchOptions from 'fetch-http-wrapper/dist/lib/FetchOptions';
import FetchRequest from 'fetch-http-wrapper/dist/lib/FetchRequest';
import FailedActionError from './Errors/FailedActionError';
import ValidationError, {
  ValidationErrorObject
} from './Errors/ValidationError';
import NotFoundError from './Errors/NotFoundError';
import UnknownError from './Errors/UnknownError';

export default Fetch.before(Fetch.middlewares.query) // convert query params to query string
  //add json content headers
  .before(Fetch.middlewares.json)

  //add BaseUrl
  .before((options: FetchOptions) => {
    const newOptions = options.clone();
    newOptions.url = `https://ohdear.app/api/${options.url}`;
    return newOptions;
  })

  //handle errors
  .after((req: FetchRequest, res: Response) => {
    if (res.ok) {
      return Fetch.middlewares.jsonResponse(req, res);
    }

    if (res.status === 400) {
      return res.json().then((reason: any) => {
        return Promise.reject(new FailedActionError(reason.message));
      });
    }

    if (res.status === 422) {
      return res.json().then((errors: ValidationErrorObject) => {
        return Promise.reject(new ValidationError(errors));
      });
    }

    if (res.status === 404) {
      return res.text().then((text: string) => {
        return Promise.reject(new NotFoundError());
      });
    }

    return Promise.reject(new UnknownError(res.statusText));
  });

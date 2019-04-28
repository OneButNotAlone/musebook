// import { Login } from 'components/Organisms/Login/Login';

const baseUri = 'http://somesite.walmart.com';

export interface RequestErrorvalue {
    message?: string;
    details?: string;
    status: number;
    level?: string;
}

export interface LoginValues {
    username: string;
    password: any;
}

export type RequestError = RequestErrorvalue | null;

export const parseJsonError = async (resp: Response) => {
    const json = await resp.json();

    let message;
    if (resp.status < 400 || resp.status >= 500) {
        message = json;
    }

    return {
        details: json.details,
        instanceId: json.instanceId,
        level: json.level ? json.level : 'ERROR',
        message,
        status: resp.status
    };
};

export const makeError = async (resp: Response): Promise<RequestError> => {
    const contentType = resp.headers.get('Content-Type') || '';
    if (contentType.indexOf('json') >= 0) {
        return parseJsonError(resp);
    }
    return {
        message: `ERROR: ${resp.statusText} (${resp.status})`,
        status: resp.status
    };
};

export const managedFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    if (!init) {
        init = {};
    }

    init.credentials = 'same-origin';

    let response;
    try {
        response = await fetch(input, init);
    } catch (err) {
        console.debug(
            'managedFetch [\'%o\', \'%o\'] -> error while performing a request: %o',
            input,
            init,
            response
        );
        throw { message: 'Error while performing a request', cause: err };
    }

    if (!response.ok) {
        throw await makeError(response);
    }

    return response;
};

export const fetchJson = async (uri: string, init?: RequestInit): Promise<any> => {
    const response = await managedFetch(uri, init);
    return response.json();
};

export const login = (input: LoginValues): Promise<{}> => {
    const opts: RequestInit = {
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(input)

    };
    return fetchJson(`${baseUri}`, opts);
};
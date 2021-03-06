// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import Log from '../../src/Log';

export default class StubJsonService {
    getJson(url, token) {
        Log.info("StubJsonService.getJson", this.result);
        
        this.url = url;
        this.token = token;
        return this.result;
    }
}

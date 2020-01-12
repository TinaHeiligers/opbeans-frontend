import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'my-service-rum',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://a5e37b9cc9734709bda463c59cc3277f.apm.us-west1.gcp.cloud.es.io:443',

  // Set service version (required for sourcemap feature)
  serviceVersion: '1'
})

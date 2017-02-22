# funktion

Simple microservice built using GCP Cloud Function

## Benchmarkin

I've used Apache Benchmark.

### Request

```
ab -n 500000 -c 1000 -g teste.log https://us-central1-steady-eagle.cloudfunctions.net/funktion/
```

### Results

```
Server Software:        
Server Hostname:        us-central1-steady-eagle.cloudfunctions.net
Server Port:            443

Document Path:          /funktion/
Document Length:        0 bytes

Concurrency Level:      1000
Time taken for tests:   58.330 seconds
Complete requests:      500000
Failed requests:        0
Total transferred:      0 bytes
HTML transferred:       0 bytes
Requests per second:    8571.94 [#/sec] (mean)
Time per request:       116.660 [ms] (mean)
Time per request:       0.117 [ms] (mean, across all concurrent requests)
Transfer rate:          0.00 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:    26  116  70.6     99     766
Waiting:        0    0   0.0      0       0
Total:         26  116  70.6     99     766

Percentage of the requests served within a certain time (ms)
  50%     99
  66%    102
  75%    109
  80%    121
  90%    132
  95%    152
  98%    420
  99%    435
 100%    766 (longest request)
```

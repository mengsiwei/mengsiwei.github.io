## Linux Tips

This note aims to record the error I met when coding in Linux.

### GCC & CUDA

There is a form to record the maximum supported GCC version for your CUDA version:
| CUDA              | max supported GCC version  |
|    :----:   |        :----: |
| 12.4, 12.5        | 13.2|
| 12.1, 12.2, 12.3  |	12.2|
| 12                |	12.1|
| 11.4.1+, 11.5, 11.6, 11.7, 11.8   |	11|
| 11.1, 11.2, 11.3, 11.4.0  |	10|
| 11	|9|
| 10.1, 10.2	|8|
| 9.2, 10.0	|7|
| 9.0, 9.1	|6|
| 8	|5.3|
| 7	|4.9|
| 5.5, 6	|4.8|
| 4.2, 5	|4.6|
| 4.1	|4.5|
| 4.0	|4.4|

Fast GCC version alternate:
```bash
sudo update-alternatives --config gcc
```
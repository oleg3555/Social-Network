import React from "react";
import './App.css';

export const Header = () => {
    return (
        <header className="header">
            <img alt="logo"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABWVBMVEX/////mhj+/ubz0Av9yBH//v/0zWX5yRv///v///39mhn+/+P//f//+//5/////+z///D3lxj9//f5nBrz1Zrr2WTs2Gj2/////PTr2WP6//j/9//859b/mBr/9dHpmRnhnB786NH3//X/lADv/P///9z9nAzjwHn/++z/9P//+ubrlRb/+vX/99z4//z/78jgqlD/khXpojrhpVXhw3T+46/vmjDpt2bipUf17L3+6Mf3kh/e1Kj/9ePUr0jz1IzaoyHyzZPrsFjsogX52q/joTbknUL7oAD0rlv87LHz04HyxHjqkBHgqkD1mi7vv2Hr2ZLoolzq//jtvYHqwYvsz4/p1HPZrzbtmjby3Zzjt2vpxWvclDT827/2zYr84bX98LbSrGjcxpfs2Jz3v3fXtFXokz74y6b0lTLcsmf46qLSnyz6jiz0wG7697bx6Yj+wy3o2UvWpVVcHNVlAAAQEElEQVR4nO2a/X/TRrbGLbW6jGRpJM24lSpfSUayZWHZcmxjx45L8+IYE/ICDYS1A41zb9pduG1v9/L//3DP+CWEQtqugbLszvcTQEhjaR6dmTPPGSeT4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XzayERSEdI+djc+JEiSZPSxO/FBUTMyxs7H7sWHRLOJhAP5Y3fjA6LVRFU1/mUVynLG/tpTtesVyq+ufHJvQXZwaiB855tNzYqv670WBLfyqeUQW1ZJMTasatG25Qz6NNRChoGeTrfW4vS6ZCpXrWK80d7ezrW9SnDseRWvXrMxtv/Ujq6MpGawbOwMCruidU0T2ZYqm8OOafrDl+V6rzvudu7mAiu1P40YSioMz3Yyoq1eel2bYu1eRJMIoEl7Lwlp6J44FvpEFlBclbC3QyP36L5xXRtnXxBMairw94HoPaM+dXMOltU/s5+rg+0qaftm1HAPa5lrUuVGYXT0PBIUMxnviPVOSAUzl6KqdLWN/PtD9ndbzO+xvNMfuOMfQpOJ1xUAWniQ1fLEeD0yGGOilymlIV2btC/KD42bBWhs5sDJLpqkGU2TUoOgjKrJmgY3lBcflVRVQ4BtWxhc4eK8baPUshwkywgSOSKELBSptiGBszIMpMJFWZaYRum197gKUlE/S9gApH5hGhdl++pslG0kybbeUigVCl6Q2oYevKHQJkyFlCHE0BF02Fisq5KE2DED2VVQuHCFWGbtU5AvpaAWYTw/r85UwQn4hxAZ3g7rwbtHEqf1gxAEgET6belYUq96N6ZQtfWxQE3zaSxpWrX6pkIVpSkLFyJOABHQF6HKSBnkOA7rPsZVWcXpIlYwLDAsUioACxUcL26kOpZFVBgJ0BSz18PeCLyNd5VIaq0wpAobp8Lz+yWskqt3TNkoFeEVmOam7qDYdt5UmNccw67WahUb+oyCVNKWn00hApVaTdSN1CpaaBFbW8ZFK62IJbjgpBauVucvBJUMu6Ra4JHFUjabrRALzXhHgZnKWbLQB1HsTALrtXGPwfGUzs3Id91NPQgMp/iWUVqpbz969HKt9Wh3o1aB4CwUOoZY3338otVaPz3plUiKFutnFRHRa++vr629ZBd0e+EcNp5sbz+8k1bqufKLv/zlwfbNKkzR97AieePQ90NBUADq3sse5+cJbX5VRvrXk/uU+kLj6cX0692N+A2Fcq98t2/6FBbLwdZJz8CzWMFPtbbd9UemC0PEL6z3yHK+Sai2fTehs+VV8E97ujNLm3J50O9vbcTtNT+BxED9H59mDSK/Q6YBR5pRq/FOxxSW0Ia5KcoGpMZlfqta2WdKAgvFiLquX0jWdec/QWE0UyhhTcPidGwKrgILaiOKFH840bGKYM6R9Ls1XxEixYX7JjRMLgw7thA42nR6r2POpn5EmfizimYEmqaXwVMke2cdlyZKQxiNFLdZT2Ubr6wwg1EGV3YLvnKpUHHN4Z6DWNJYBsgqPYtoBJ2J3FARwp1sekUhqaLspGvCWiKEoeuCQuoPL0QHI2Tp061CvwHnQGOjAbfo5AJSRKhotFtHJlVYYwiiT83Ofo1YkFTLkNHN+0MKF8IRvFQ68Ft1gt8h0WAbHdeblIXwciKa4Y7I5t5yz0Z2Sl06AgWRAM8P3fXs1RgilZwfUogvTZLm3Wc+NItoc0/HNil6zRFEIjoqDLvPjhowHsNxjxSJbWWbZgjdN/1ut+nDRwTF34yxrmdum25DKFBQ3Wxu+aYbwX27ovUOM1Gzjey+Ow/eXGAEk8Y/MZATyAuFmGT/qzs0aRSazdZOt/XfwVWFmhav01AJw+ePS2K2t92EoeyarVpKkF6GyIWjwqN6KdvbPIS5HglN75jE+jZM2dDtlHulbKk9TOAt0OFGxjCYQjMcueP9di2utHcSoQFPzRnVlQXKsqVP2BBlOWYRQsGN/GGvIoNNWbRCRs3bgzzSOLpf8rxaHFwdpaq00RFAU6cdFy0rjdtd90gJOznDStsd2ndHhUmNLTfZXrNDQdeZjmKwtWzInuk2sy+9HRji1C+LxDZuK0LiCuOcSHCxaNfXj+Dtmzv1a+uB31cYH+vDMGFPUKJLhfCuyzUNLxOlWoUl+Q4odMcPkSxZmfhVDCWJ6C8gV4SFCyO1NQJF5MSEvEzXssfp94ofjfzH9rFTzec1NB2HMAW6pdTY7odQoTyqwNqpSVLxvMBm+WFPU7O3I1iU+mfZohNX9VS9uTYQ6NFRbhWFMgK/gVElfzJwhV8B0fSnamAsYggGUbU9X6BRkpv7J3yzADnFhNpCxcWbw6gvhK0aQRiuSsjogvkTDrxittmAOf2jV128qcr3ZqQoftvKrplws2denJmtKFpchmGumO2MapRNmK1NEWVgkSeWZE8TOnKT26vU2UwhWCr95t0B/bVCwF+vZZY7i68UHvxKIQGFeKMg9BVzXyfOzCUjcsbyatJTvYILZn1dry5yfZxLIKcmuRRcvkujHXExu1R7LxGoYuZw9VKhNFdY9ToQXvogXkmhDAKRCCPJj95USAsTDevyH1Bo7/pRX0lO4hT8JIsh6R1BOi1c2D0fFApncnXxptI2exLNEW8YgsL1ZQXjOPWxMIqiE2TrTKHS1GV1plDNZLtK5Cqzmu4fBrF9fNKDKfM2hVHUtdVXCrXfURj5OSMlEprFsNeJLhVG0XZGXswi6xzWBdfctutDFsOfg0VsA8cDWx/RMlQhixjK8xiqWNyB/EAPS6sonHVGPx1APn5bDKOkvVzxr1fI5qEzLUSNKDkxnKXCi4QlygtU9xuKEpXJsvZ5FcPZKL2Moez0OpDMmUICCsHGLBVKmexdExR+I66oUDYqnUECK7HypsKG+VS89TaF8tUYSiq26kwhfVQh85oVQS9hcB70JK/TUNzwhW6r80+RnB/BYtB2vK7C5mFl4TY1tOczz7dJbDKPoT5XCEWkN6Yjgf6gr6IQ2bgYb8/WwTcFQqppHJy/yqWXChEr1WSbDSuhP9HzeWz1DsF60MMeUm0o0HUjHvYbg0JHTCutZBSF43oQEBtVsaWvK/Ayh3W7UoYxCYPk2MqwWqNil2kjAq+INP02ZCk32bWLqKrdcazSfhK57uD+SnuWqZ0Way8V5dVa/7pC13woX6fQmCmk90XsBJZYZsnYL+vFYlAs4tJDv9+I/HWwbdtJ1FD8dU9TNaib48kQjCZ4PhRfwPiN6Np5HBNi28F3nbCfCC9LUCiVZwoPz0XDgJsF501YyiJ/L1hFoQXV+F7zOoUKGxvx9QqbEIT+IwNnSKBu+MyRd7bFQE9xZXOLHoHvmxoY15tRA6zE9zFJi0FpwtZ1s38RYNvrgh2n/oOSUSymRv0uOAFqPsaBLjOFsJy2NqrIKurna0kIvv3bOyspxMgRT6jwdoUKM/db3jUKM5DvQWHjr4+nu49Frfqzz/Z4DnY2p+3JA1+IEmqui1DF62c+DMsw+WFyfj55OoQaSvEPSxa29RwkI2r2W7levV0uRII/CJu14vFMoQlz1IRb7032mzA6+qPB3/LHqyiEuayXlesVglOsX6cQ15rCrIYYFHyP4I0W1JcQn2Q8BkfdYDGos52p1HsBVk8YDY6eP+/3GwK46u5eDEWSJZ76TEpkHh2BKYBwDjpTPU0Xo5QOwLsVfD8x2bD2f4i1lfZpoO4RXwi/oTChu79WmCwVijusNId6l/anoqVtHPZBLoXE0oAyQQn9OrKZEGfjWzMa+I0RK+V9FrW2g7BtF51ayxyxt6hAIe9C4ezvyoahSfNMc3QfHgahpLOidHiO1JW+e7eRXGm5jU63ab5lHpoRlKW5eUtwP7bomYOB22HJBzK/VvmfH/0Gq+sE86JGVFJrgbuKTLYtoZjJTh1hdb6Ze/NREgl91lUYr50XG7Y23xy5dWe/kLiwTIF0KEyaU2ZAENuVhcHRLF0Mab9PFbhy8M0eseSVqidQWHsp0J3zve6bxlSBB0ULhczfSUbt+bjz01+3yQzdjndbhYQm/nCtp8sYGaW90/FPPzUajYPxvYkXY2SD7QXjq2en3zf9PuNobbMHqQgMP/wYxp3p6dYBnDYPttYee1m2pssEPA1TaFe/axUGUagkzZ/r1Tx2yCoKkYyza5F/KhrltyhkD7qiUJPtXq/XntZmG79El/J57+H+/lmuV2KVnIqk6p2N3Ob6/u3JeSlI8yoypJnCYwvHvc3y7XJ5sudlA8uyZsolMdXy2f+dwJXNzYnn4FSf7x7PFWZtNW7fL5dPpp6u5W8hslr1BApPmcO3cuY1CtuLpjLbmobOEceadQ8KR8chBP6AiYGiCWOYKZrqwNJOUJpKWj4vsW1S+OQt1XGwBIaTpBbbBZZmo1xmdQ3cx4ELRiBlUkvV2EhZKhSDwFLzbCMYW0GKDHTdd36/rRBMRjlRmr10evBWhUrHu2zMHqZpMtJm+/OyRnTdwaAZs/1o9q1DEDgyVLMqiGOb4khO5zu5qq3DwqjNTqMrQJCJzIwAFMH5qmEgjcxuNFcIb8tJZfZdhx3rDpxeZTeRKSS5I7OzF2S/fVOhAmvwXfGyrU0M0SCiqM+Z/1sqZeGAGOzYELNZ3YD/Q0zgjCiCKWHAFV3Mzk7M/hhkfh7uZrDbiFkRfuD/8Gl4UcZylObzMgyIFF5iVcPpanvCli1b3l1qfo/S9piC+xv54KbpYsRGR0fmzwsngZFk976c89WMN4+/+AIOv/jiy1d8MWN++HrLy/Ov8eTJk15VLJuK6d7V2QbEa/FYRSEGhdl9M+rUibg/pA3wUS4sQYstDTgu7FWXIZSNhzc+/8B8duOzXwzjFJ4ddnRWnr8zMsoUDSjMovUSKW0O2U6UC0MzXAzTMDoV8/OWYE7EJ5/f+MB8/vmNXyCvJ9SnQwO9y0b+pUJZwqmx70f+oxKO65trh+MEnFS4zDSFHl44CUSw/vDGZx+Yv//9xi+xfmpSXym8nxiyfSiEwTkqnfWb+bxRuzndARO19DSFzVhb1uZERr0v/+MD839ffXWuGuXOuNlpGe9JoQz2P+h1XdffOskGetXZBAO1WP2TpyUtv9xfIZIW9MQZ2Rm/ffyPtlycr5RsTQx6Xs2DqvF9KMzMt2qM+ks/VMzOz5vt3Xs+m4sK9X3/xENQysuvtf0T+ABPkav6+XphNKK0My5AqeP2TSFUhmfMjL2Hyf5PgCahipfbGtAoXHyBBtnm3jRGJHAy/xK/L6ypGBOjvv2y6UNlDkY/aa5PDQRnHWe1quyfDU2SMEKaXetdnDxYP330t+962bSIJZjp4Bg/du/eB1VUBX8bGEZMQKeeNUgRg3FGtgSm+BP5nbU/gPyrX8mZ1TccDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDuffnP8Hj6ROVqZWsukAAAAASUVORK5CYII="
            />
        </header>
    )
}
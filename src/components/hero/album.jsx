import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '800px'
}

const slideImages = [
    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85f6X3yzG6ehQ145bxeFarCmoozvGd-ZJmfvTFOasNfwSePedc1LyY8Q19K9c9F1SEW2V8RLA4tcQH4U41Ot4JOYrHLxOZbBXqNtMh2J7nwUD5UfvQK79WAUk7MBhW2KlSqKenn6PHzkcrTu3ES1z5e=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84Z0LmNwME9d6ATlIKhjSxKL1LwYbsVEgCnto7uN2axIuI2vneuhFT_ZGDMz9TyuxGy1_QUdLVTu_9S1AcyPWRvSU0ZUIDtgUfVMieRjl4K5V-sbulc8DyseFlrgQtDvAfj1Twl5uXZPhHL39UNMC8s=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85D2s7pWSVUJfPcXA11t9JzQaZgET5h53S3QyGS8bh31bTJQWVv8cx_wwGz3egRPygfaVKYlG2YCKC24qNadGVA0xMHudK-eA4VdqTHCxCwkbsGwQqoj_IcHquwUPr9JCUiMNl2-T4OL4zG15M8u2mf=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV86MULsVKR_QyBBRCY4CfrNXmoUMiu6SCUzNckS6QWGiU7Bc6AYrF2hNyZKHA_IoEt3QIDop8n8p9GdKd7n48ISp9ELfkuU8MwfZFjKrNnnXabNhUsUu3O65-Jnof09DFr159MweVEbK6l0ujTvYXDA4=w609-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV854PYp8t2myZheZHD2RPRJ9lGOw1XwgPuFoXY0xmjrv5K76Iethb22aiED1YJXqjNOAIvjtW-lV5NTAJJiQKleqzdNv9SiQSZ1P8umujrwMnJ8WFaIxRq5uRHgjCZ1_TfNDpqeUyeApMWJwZFXfMKrk=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV848YlnaSULX1axFnxyTQOKnhm0f1A6-yOyRTUMKB0GthRGegBmPGGb76olRG1JfIaUqUR2aT7ooOUDO6piXZav2mAQKzohe_vtU8MznmUI1d3K6j6xpXF4WoYb10K0ZdkBOHnJRxbrC_4XB3LDIts0_=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85y8tHs9DFnKVxw2dwSyJ9bJM_QvMsOTqsQJxC5M-o1cuBqbVEeAMqKgDRtrZGV7WCbBNbpWdF12UnP7P7gsifMQb71DddmuC68tliPj3IQ6YgA10X5dEPas9NWwlZxl7fvVhfBJLqKuBgEnBDfbX5C=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV86N-R_fLGaQiBBsSYRWb0R4tYF-KRWUBDWInOXnRPw9tJget9a6oIuhRbVqbU5hoUckwyuPxzp2IgPNRejP_nDdX7_o21TflhMwTzmDfqiwB2q9f23ozmT8Ys1jycbxmAh8IN3UvqnHnyQoqs38DtW5=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85IK-1bZ1VEGymPKXaodrTC40ytTdApc1CX_9CIJzDEceZAh0zlLK-zo2RpnOZCLnnQz_TyKK5gxKUfWVrzYltpm_7-IbTmQR4RdSLfaidoKvnv5d-45JW2OGrUPW1RZnNEee6h8u5dmqYwXhcqegxD=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85gy8RyF60bYSclEpS0b2D8ekxdjuQtjUSzkpWhddpPalsStgNigLuS831sMFd9PDgWb3MnxHBAtEwRDJ-YgGycdGgO-674lHNDsJt5U0fzVASNweAVNaPgtjZVMNjEFZfDuRTSX2SUKOtiUNadNOan=w628-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87Mq5GLcmpajxDbvehxIOWQ5q9NIZvfBkmtl0GN8FadNAkQv5_MH2SJoQI0V5__qNIDtk2nMzb_oLBWtBTTI1JS9xEL1JRbBBDm5p0_AB4VNV8IxxEGrnF6uGkPhqCyton-WZqb4VcpXXT6V1Cdj3mG=w699-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84Pr_27Oifbl5c-KJJ-4oiWkAAiDCpgEVQjWSiZscQp1gTbZSxPR9AYpHig1-7RyJg7wUg93z-pQLqm8DQhXfHgNRUa7P8Rv8oQF82tfuXm-vomz494-4dhdW6_9wWZXAEVMMdMIP17BVSyGhXt0qCm=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84UV0u3C9oNsZbxZFsuqu-rUJ6j1SfIQNR30sCoFgH6UzfY4fZQ9VIFGcMfbuk_67pH6zCmm5We1Afp-EnPFUHF6gA09x1ZNwYA8UjvTt_99gjJDa1M-bkZnz3NsfAGj8_3eM3rTYv3vzaJZbAuhE6O=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV86XpFkmnMmC3oz1UquLZI_tEEspc1xC14QbDCpzzRDsSFBZdnya314RXiJzstY33cUjgfYD5z_5U0KGqj-udjzkuBWhYcJGmMZjedBN4IKmLy40MUcuTCTTx1UyGt79nC7AmfecwB0MEdl90mYwAyP8=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV86CfABAxrh5Jmc5yBkpg8fn3M5Ayjoi-Aj_f_PYAI_nl0KFtNkwqZSoGVJEy_9C1o-wMXtld1eQj5c6uJMDI1sVTyKC8_iAvJaZsfxYgtBsgCM3MZ1hhBAnjjxTCZqn8NznrusKok8toW5dkV4RWGPO=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87GSmOAumhwAED_BGoNvnRZaaIaUiA_OSgQ_cOTqoWBavJjBwRCGYNAuwVZHdZpfEzmUulcNw0_nPR_kCezMSylj33kdzoA4zeqh3Ef1aqui9RO0pSlIDFCuTnfb6pjGbK_RjagaHSu97FLcP9fE5Xd=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85PA0YLiBozrCMsoq0lK58I6hVMJWQD5f_NoPyCRLIrjxYYOQKPF8DrNV7PUOvb8Ayqkm3hr7lkmMSwhLaQZKeIryT7uOJkcikcEyKQg8scG3CqPNP-MmmrEVji6chmYy0uEKtmtlmolTVwVeevhDGR=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87SPJNvlDDJumwrjL6SAa9hcvYoPh8vuELiXTffz7uw-X-D5SurdzDmIFtswWxyP_9Uucxf2xdkfpsyJIWUG445HZJWJ5vEnRJ5DB0cyH6BqT2bW1Fq8qOtk1WApXQj6K_AfKRmUuSoXc6IxlGU3c86=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85w8OkTs0evc7hIwP7tNaYoeekz2_4I92QLktHbHxwJtxKojoq4Ku8eaG3lsNBD5_gq9jnsOGk2oNtSfPLnca04J2GquSV3VVbOA17BIKHR98t8eP7pLSmymmsPF47xFsKRJhKQAr6XGliM1WYriuwM=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85ZvTfMSH6HJBGDhxxbbl55vsiViZc-B8hwznNEQXE4axGs2ME3y25x7Fri0ES659fuNi1LvX5BW5oZbmN4M7fqSn9AaeCilwSHmd3FEkHX3Om1SAm_RL8rFwDT0Biq4w-FKN2rwrAcCs9IOn633D8t=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85Z3BT_WSQ9jT0u-mOlDVC5oZyyLkFsLYNn8YYla1f1Pv-UMY-bL2DrcJ0rTI_8Qek4wynFYjr4ui2Z8eqdypp88fbmbzDc5fBEdsUIv1VdGeugKYHdjNlWiPLNWkKTvMAkl3v1SPXfpbiyOq--usuH=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV850DXgjUihjr-dg5XNhZ1ViT7nS1DoE1CmNHYfjG813Y0n3gB2gj7qlAi8OQOuzxYjlhiuooLBJi_lNoiMMBGvXnwW1rFMwLK_JcEloV1Fe4H3PRUgSr_FVHVDMnKxDMPaOZr65xCAvtSHjvslmawO5=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87eSlC-onZDXq0xaNlB6HzHDb_EGMoxmPJQSo5Z5RubMpZJUaDTjWpB_JlfOBk9SMtSB-9hM1JB-fbA8Ih6iArctO7RJN2vNZ5pptuhzj3PRtJNZEqFgn4YuB5IXxb0A7ui7JvEnA5qThzJJVS0iupg=w1010-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV842UM5sl_4mCj0AEhhHfNX_QKM1U3SgZeuN-vP4z8aQUnGd7nCOX3AtR1OILwFCkthycbTLRntzb9oHi9U8iSUGKGNgyVZaplXR_J7EToEXZXstQl-ys4-Zr_WcAmkj-0sgv5A-yeOxrDSG7VscDAIC=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV861Ch-yVzlCfjCxmVNaM3rflE_P6w2oxcpAddfj8DBSIMrWRNt2NeOAvaS6SwAQub20dw9_kxjBeuh2l994elaJTnQt225CesLtFxk8X5lB4KuMNDdirhQPXiqEOrevieE7nVtTOy-1Tkf8tHH0I1EL=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84llWj4bh888FQdzYcyE9G6Gpbf8tvn7CFe9ueI9D8eNgR7Gecjwg6hFotUIXwRhzJcoSxrnP44BZmUyBQMa4yvqgv_Ts0cB44OA4pCX281hyi-BIgJ6o2E7heddLTEKMAGzQmcgI_qT9ZdpV81W0UV=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85RmOuC4QAl-pky57nHZwgpzcV3sQcaowYjNPm5lu3M8PYl3t1BOUIIDK7H93DorN4jdGuSU9osQenMv47LUWe_B2q-1HiNNFSRjKtDlqT-rfko4Ks1Kv9FrcswfX18uCy9rV7-hMd9YH1kp9v1budp=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85licfbnUSsSu-36J_q1IEGMZKVYV9Hg0vrWv_GDcotDyAJFcOAWHzPTLpm75t_lR8c8Qrdh3RKmNQa7dYMYLLvmSAgaq9O1i4tt3IW959mEA1CgdOvkr-e4G6usk_oByysUzHYvPldaMhV8zF4sqFH=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85HDxX0hRVoqID6_fBPNYxF4FZnnogm4AXh9XQ-SwqZvvWn1MFnTBlZVq2R0psRWF3szrCpLxECtsLIIPHVdNnt7plRW_lV8nVU_WSrcTC5IHieRAYmPpfVZwrZcxmPpreJa28IIEj9AX13CWJBo6Er=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84PN90leD4HMd3MoDCVPEjw7za0FYzqDJ8WjKFVyJ41hGSZWoWwcGaIhTS65MjbIHL5qOy1-wKFy6M8pBylXWxWpF2TqebJslrOoNsF5b9DOppkWElkkg3IVDyAig_PJfJRMIgOOuu5tFWKdg6xQAcl=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85eiGjMR-x29w79oD7rssxzHmoCz_mvhgD7WXj9Ny55YZ3jp3spa8oSkbMtWOtsBVbf5gm3vbatkA4PVD18G0zJCqUEMXYaN9AFKgyHwLEdM-rrM0GvoLqVU8T9a0oEp-56bJiRApIz1FJ1xUrGXHZn=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85v9zqrnfyMJSeSBgazL3_zNP1LHPOk8zUAK21HWd-YWScNba3W3_QEvI2Yiiy8gCnF0cUn0QwdZusaMlPkZCTNpWZiPi0M92ycO1gXKJa512t4WMJbDou2ARW5NZQMHz9ZeceBVt4KwenZ5OwD279S=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85Psp0onQohrtWltx9ZciZdDMjES6-2cAN8LJPMHYN0mDFnhk7vD8srZnylkynnJ5Hc292NbYDncU_EfsKdMHjNcd89NwWJtMhmGGJuYaW3Pw5strMx0WuvhLQxNran5EoK1Jh0piGNM-KFcrxfborw=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87V6j96nsuPUm54EXU1fSY486hH7WbXH4O3oouhcQtxd8aopZZ7hCvJfBU9v8CishNMGwQmRXsJrFlUT1AFUaCQYxDSidoMPLAjo-vqI88je7uu72PKB9U6sWi0w2SJU5u3Yv3Vxt_XlE4NzJHNoTpK=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84OkIDkzIV1LaIjkeEEKl06EcLW1-KiFBseiIE1slmoUG7QOulPYRk-C0HjbL579XRYCTbbQoz7Z0gX7Wu2K9OV1XgpsKnF0Py3UVjuso92yNVwbb7jD-CK77OMxYI_DHKFLNkenI4Ryy3ajOkzzd77=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84sQbJ6CmT-16amenzTvde5QcxBWQdmF3h75CYCsKe7jn5nVwJnkCv4s0iHOtyNSOFsdo0g5iWaWpHvWaOmGzaNNzocgTp2yqTuqIl_ola5qL3fQaE7MmpoIbBuVpsCBg0DdmPe5YlsqBdhvATCzNRc=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV86DOsCTd6xtldhxhEAegSqphPPBkmaB4iX53CDPwUh3FbicXAdRXmDi7SVtNPA_EsF7HSdSQoQH2cdLkw6khieuKUJ4oeZf2N2Ujc0OGtLswclt0aUeYxIRsIT75ZWFVkVXicXuR3Qn1fQJlBCsktJn=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84zlL65fnoat5PD6iBFKsezIPyd15z52fhM8rKptFiE-_bBBAlqleznq6dupoYospnuS7tAAY16hdV_a7V0w1vZtnb4HQPclFVK8x3xpGcMVVE4fELLTbY5Z4m7U3P8gx8XCLsoq7X3IbnaQngwc1Pl=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87xAStFTxFOZuVRFrwiA7JYr9YqIQNOKPMy-Tl1xRgi4GmtswtWLoQGx0G5dxUneZJySHXRcExZOckcnT3muYyu0xxcwb6JDVZrtq601Z3dZfkNldKkwa6gzsH-FAc_JHNWH-DqZWq5r02y3n-Ici13=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV865tk3ccdN8GkzFW4-S8AktXOcH5Uqy4qmAJR6m_XBOSExMK45XGnkxOFkk5_L1wL-xbwSA5GpP9bDMDCn-ligoc7N-a8bNbVX5emkwm_9VZn-s1mamRWe1WOS9fGxHe1f_hOnsW9DTSHcL7Vp2YTJu=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV8779rHLJuHLrPUfgBQXil4YWpTV8Sq1H74ZwHQU3FD-J-ewLlfBXfto407RSxRZS9cRL3-vDDwk13WR2Th9tRCt6HioeywlUGS3ppDob_UjLMUOl1grJonlH6BxqVIwB-g3tfMvCKmDL0fapD-YNFPH=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV849--IrpIimfAa7XFv6lFExancXYi60dQ9sXdND0vv_IjLs0a3-3zOi6i-gmPbFdzzlXmU-egjSru36iyVnPQ8nNZK6UfXKYB-T4JuUUeWjARcc8KRexmNjDPBmednVQJT6tyNrdRm7UugPlWHZI8bf=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV868KGorS3s8k7o5z6qP6X3MburKOYWOBbCE2bO0KFyiMuUiVf8Vw91HqmmhUEklofkarKPE6pkrVWMviLeQFMHi8lcZ_sZJw1ZYex34jQjInCkM-5zaxJCo75rA9q_jiMGKGuoFdGzj6E9gr1m93Kfx=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85lWxyaGZfU7d_Hx-51SBtQ2ZcQclQYioBLeOOh7G7CPy4CKGBZv5eA2j4X0ztVUoqXB1GD3ODYnLIH4t9IJven4ZMcRFN1B6p_wNV9RetEIkc9DrbGN0VQJ5M9EdPLubdwQm-cz_EMvPuSfImKmrDY=w565-h847-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84TLq5fB4_KMlrHfvZXWwDTD40V2DdukmQbt_HHgUu7UeqYJbfanwBi4OKoaC2uMVq19aZdFRdbCic5RG33KsSbYiSbX8wJKRIcIMBVxTjrCUP20tZNm9OBqwSJ7ZJhEa0z8PxHq848ADyA3Z8iPrQB=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV85jsH43OTx2YPsUY_J2aBDWd9mRknU5C2Q0fZgT0VQ8L9wuNvT4zDVD15mrNroFCCGz452MAG4FqeY8B8yz9NBWWAVmW68dFLDEsLd4BP786DMnnCJ6Mh8fUWErbDmCjXufKZvhCHDeCBgNbmgmYNA3=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV84aIl3YQcMezIBbpqzJHOcn4XosMCjPXFbPzTi_pVy3cVDvrfr0kVsEyoK7Drp6LTvX6zFpTN_pYYn8GudSx0NUr7lKxJrHE1u18EumDsXVSQXg-l2aQcPdmbEX4SdvwZUteDrQeCGR5Q44Pl1gLxTG=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV875xphmcF_juomQdT4xPUt1Ob9C4ec8vnrv30UQtbJuKV9Lkrm6LcpOeGDvR3jdYitg_lwLTbZ5wCCOTopsNVsXIrBU4iHe2uI9nkif0J5I7GagUq3eSLAPlpf9EuedrzxEAvcg4K0zcjvnaeBSiy-a=w1037-h691-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV87aOZiykupS9PAqwxl-EsU1Lo5IB0WkBeGsqIxU2ZecklbFvBV1qw1nlVaBkiPDLgHCAPCLj3wsyu5jvG_PV-7b2leYkHC2FAfuuNxdfAU2o7MjEmg3EB1jtQfUPTrh_Lssa0iNRA1Wqy0aDzl4wYm8=w1037-h559-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV86ZgEn5kdlTPFeWrd0gEJZt25FVFcjEnA0B8tVnXuIxHuCIYC6rn_EMJpg_mZaUUPVwp3xhFuBHs2nRQYpqCRXyYXWLDUdMog1_BddCR0dU8DKmIGTLmJvS_65XFMyGviXoSw2YByRGfSWDtt48mAtZ=w1037-h767-s-no-gm?authuser=0', caption: '' },

    { url: 'https://lh3.googleusercontent.com/pw/ABLVV845QBENhKwFw3ef8FeBiWv6FDpLzykzEWZ-6WCQWmCxFOc98qfmXF4AYaTGZjj0IjbM4dr7yiL0bHU5IN4gc0hD3Get1o_6kuLgaVOXbl_OWl1utB9GtM2abeuOsuosQVFyvQyYvbkhZDaIzHboH_4O=w565-h847-s-no-gm?authuser=0', caption: '' },
];


const album = () => {
    return (
        <React.Fragment>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </React.Fragment>
    );
};

export default album;

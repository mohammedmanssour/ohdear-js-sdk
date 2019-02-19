import ApiResource from './ApiResource';

type CertificateDetails = {
  issuer: string;
  valid_from: string;
  valid_until: string;
};

type CertificateCheck = {
  type: string;
  label: string;
  passed: boolean;
};

export default class CertificateHealth extends ApiResource {
  /**
   * The details of the certificate that was found for the site.
   *
   * @var CertificateDetails
   */

  public certificateDetails: CertificateDetails;

  /**
   * An array of checks that were performed on the certificate.
   *
   * @var CertificateCheck[]
   */
  public certificateChecks: CertificateCheck[];

  /**
   * An array with all the issuer names in the chain of the certificate.
   *
   * @var string[]
   */
  public certificateChainIssuers: string[];

  static newInstance(): CertificateHealth {
    return new CertificateHealth();
  }
}

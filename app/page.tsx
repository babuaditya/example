'use client'

import { useSearchParams } from 'next/navigation'

const certificates: Record<string, {
  name: string
  certificate_number: string
  certificate_type: string
  internship_type: string
  department: string
  organization: string
  organization_full: string
  university: string
  course: string
  start_date: string
  end_date: string
  issue_date: string
  status: string
}> = {
  '11002-11949': {
    name: 'Ms. Shivangi Yadav',
    certificate_number: '2026/08/16/11002/11949',
    certificate_type: 'Internship Completion Certificate',
    internship_type: 'Human Resources Internship',
    department: 'Human Resources',
    organization: 'UAS International',
    organization_full: 'A Unit of United Accrual Services Pvt. Ltd.',
    university: 'University of Lucknow',
    course: 'B.Com',
    start_date: '17 Jun, 2026',
    end_date: '16 Aug, 2026',
    issue_date: '16 Aug, 2026',
    status: 'Valid Certificate',
  },
}

export default function Page() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') || ''
  const certificate = id && certificates[id] ? certificates[id] : null

  return (
    <main style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingTop: '35px', paddingBottom: '40px' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '15px 20px 25px', borderBottom: '1px solid #e5e5e5' }}>
            <img
              src="https://www.uasinternationalmis.com/imgs/logo.png"
              alt="UAS International"
              style={{ display: 'block', width: '100%', maxWidth: '700px', height: 'auto', margin: '0 auto' }}
            />
          </div>

          {/* Content */}
          {certificate ? (
            <div style={{ padding: '25px' }}>
              <h1 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 500, color: '#333', marginBottom: '20px' }}>
                Certificate Verification
              </h1>

              <div
                style={{
                  backgroundColor: '#dff0d8',
                  border: '1px solid #d6e9c6',
                  color: '#3c763d',
                  borderRadius: '4px',
                  padding: '15px',
                  marginBottom: '20px',
                  textAlign: 'center',
                  fontSize: '17px',
                }}
              >
                <span style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '5px' }}>✓</span>
                <strong>Valid Certificate</strong>
              </div>

              <table style={{ width: '100%', marginBottom: 0, borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    ['Name', certificate.name],
                    ['Certificate Number', certificate.certificate_number],
                    ['Certificate Type', certificate.certificate_type],
                    ['Internship', certificate.internship_type],
                    ['Department', certificate.department],
                    ['Organization', certificate.organization],
                    ['Organization (Full)', certificate.organization_full],
                    ['University', certificate.university],
                    ['Course', certificate.course],
                    ['Internship Start Date', certificate.start_date],
                    ['Internship End Date', certificate.end_date],
                    ['Issue Date', certificate.issue_date],
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <th
                        style={{
                          width: '38%',
                          backgroundColor: '#f8f8f8',
                          color: '#555',
                          fontWeight: 600,
                          padding: '13px 15px',
                          border: '1px solid #ddd',
                          verticalAlign: 'middle',
                          textAlign: 'left',
                        }}
                      >
                        {row[0]}
                      </th>
                      <td
                        style={{
                          padding: '13px 15px',
                          border: '1px solid #ddd',
                          verticalAlign: 'middle',
                          color: '#333',
                        }}
                      >
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '45px 25px' }}>
              <div
                style={{
                  width: '65px',
                  height: '65px',
                  lineHeight: '61px',
                  border: '3px solid #a94442',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  fontSize: '34px',
                  fontWeight: 'bold',
                  color: '#a94442',
                }}
              >
                ×
              </div>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#a94442', marginBottom: '10px' }}>
                Certificate Not Validated
              </div>
              <p style={{ fontSize: '15px', color: '#777', margin: '0 auto', maxWidth: '500px' }}>
                The certificate number provided could not be verified in the UAS International certificate verification system.
              </p>
              {id && (
                <div style={{ marginTop: '20px', color: '#888', fontSize: '13px' }}>
                  Verification ID: <strong>{id}</strong>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', color: '#888', fontSize: '12px', padding: '20px 15px' }}>
          UAS International
          <br />
          A Unit of United Accrual Services Pvt. Ltd.
          <br />
          Certificate Verification Portal
        </div>
      </div>
    </main>
  )
}

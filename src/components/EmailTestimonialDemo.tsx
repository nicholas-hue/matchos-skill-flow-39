import React from 'react';

const EmailTestimonialDemo = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Email Testimonial Template</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use this email-ready testimonial template in your MailChimp campaigns. 
            Copy the HTML below and customize the text and avatar.
          </p>
        </div>

        {/* Email Template Preview */}
        <div className="max-w-4xl mx-auto">
          {/* Preview Label */}
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              Email Template Preview
            </span>
          </div>

          {/* Email Template as HTML */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
                    <tr>
                      <td style="padding: 20px;">
                        <!-- Main container with gradient background -->
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%); border-radius: 24px; overflow: hidden; position: relative;">
                          <tr>
                            <td style="padding: 32px; position: relative;">
                              <!-- Decorative dots -->
                              <div style="position: absolute; top: 16px; left: 32px; opacity: 0.3;">
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 2px 0;"></span>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 2px 0;"></span>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 2px 0;"></span>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 0 2px 0;"></span><br>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 0 0;"></span>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 0 0;"></span>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 0 0;"></span>
                                <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%;"></span>
                              </div>
                              
                              <!-- White testimonial bubble -->
                              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: white; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                                <tr>
                                  <td style="padding: 32px;">
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                      <tr>
                                        <td style="vertical-align: top; padding-right: 24px;">
                                          <!-- Testimonial label -->
                                          <div style="font-size: 11px; font-weight: bold; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">TESTIMONIAL</div>
                                          
                                          <!-- Quote text -->
                                          <div style="font-size: 18px; line-height: 1.6; color: #1F2937; margin-bottom: 24px; font-weight: 500;">
                                            "HireApp completely transformed our hiring process. We went from spending weeks screening candidates to finding the perfect match in just days. The AI assessment is incredibly accurate!"
                                          </div>
                                          
                                          <!-- Star rating -->
                                          <div style="margin-bottom: 16px;">
                                            <span style="color: #FCD34D; font-size: 16px;">★★★★★</span>
                                          </div>
                                          
                                          <!-- Author name -->
                                          <div style="font-size: 14px;">
                                            <div style="font-weight: bold; color: #1F2937; margin-bottom: 4px;">Sarah Johnson</div>
                                            <div style="color: #6B7280;">HR Director, Tech Solutions Inc.</div>
                                          </div>
                                        </td>
                                        <td style="vertical-align: top; width: 80px;">
                                          <!-- Avatar -->
                                          <div style="width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                                            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face" alt="Customer Avatar" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                `
              }}
            />
          </div>

          {/* HTML Code Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Copy this HTML for MailChimp:</h3>
            <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm leading-relaxed">
{`<table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
  <tr>
    <td style="padding: 20px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%); border-radius: 24px; overflow: hidden; position: relative;">
        <tr>
          <td style="padding: 32px; position: relative;">
            <div style="position: absolute; top: 16px; left: 32px; opacity: 0.3;">
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 2px 0;"></span>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 2px 0;"></span>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 2px 0;"></span>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 0 2px 0;"></span><br>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 0 0;"></span>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 0 0;"></span>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%; margin: 0 2px 0 0;"></span>
              <span style="display: inline-block; width: 4px; height: 4px; background: white; border-radius: 50%;"></span>
            </div>
            
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: white; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
              <tr>
                <td style="padding: 32px;">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td style="vertical-align: top; padding-right: 24px;">
                        <div style="font-size: 11px; font-weight: bold; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">TESTIMONIAL</div>
                        
                        <!-- CUSTOMIZE THIS TEXT -->
                        <div style="font-size: 18px; line-height: 1.6; color: #1F2937; margin-bottom: 24px; font-weight: 500;">
                          "Your testimonial text here..."
                        </div>
                        
                        <div style="margin-bottom: 16px;">
                          <span style="color: #FCD34D; font-size: 16px;">★★★★★</span>
                        </div>
                        
                        <!-- CUSTOMIZE NAME & ROLE -->
                        <div style="font-size: 14px;">
                          <div style="font-weight: bold; color: #1F2937; margin-bottom: 4px;">Customer Name</div>
                          <div style="color: #6B7280;">Job Title, Company</div>
                        </div>
                      </td>
                      <td style="vertical-align: top; width: 80px;">
                        <!-- CUSTOMIZE AVATAR URL -->
                        <div style="width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                          <img src="YOUR_AVATAR_URL_HERE" alt="Customer Avatar" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`}
              </pre>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Instructions for MailChimp:</h4>
            <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
              <li>Copy the HTML code above</li>
              <li>In MailChimp, create a new email campaign</li>
              <li>Choose a template and add a "Code" block</li>
              <li>Paste this HTML into the code block</li>
              <li>Replace "Your testimonial text here..." with the actual testimonial</li>
              <li>Replace "Customer Name" and "Job Title, Company" with real info</li>
              <li>Upload the customer's avatar to MailChimp and replace "YOUR_AVATAR_URL_HERE"</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailTestimonialDemo;
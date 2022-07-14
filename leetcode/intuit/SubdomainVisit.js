//https://leetcode.com/problems/subdomain-visit-count/submissions/
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  
  const domainVisits = new Map();
  
  for (let cpdomain of cpdomains) {
    
    // [9001, leetcode.com]
    const [visits, domain] = cpdomain.split(' ');
    // [leetcode, com]
    const subdomains = domain.split('.');
    
    // 2
    while(subdomains.length) {
      // leetcode.com
      const currentDomain = subdomains.join('.');
      
      // true
      if (!domainVisits.has(currentDomain)) {
        // { leetcode.com: 0 }
        domainVisits.set(currentDomain, 0);
      }
      
      // { leetcode: 9001}
      domainVisits.set(currentDomain, domainVisits.get(currentDomain) + Number(visits));
      
      // [com]
      subdomains.shift();
    }
    
  }
  
  const result = [];
  for(let [domain, visit] of domainVisits) {
    result.push(`${visit} ${domain}`);
  }
  
  return result;
};

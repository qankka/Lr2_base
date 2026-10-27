function ipv4Parser(ip, mask){
  const ipParts=ip.split('.').map(Number);
  const subnetParts=mask.split('.').map(Number);
  const networkParts=[];
  const hostParts=[];
  for(let i=0; i<4; i++){
    networkParts.push(ipParts[i] & subnetParts[i]);
    hostParts.push(ipParts[i] & (255 - subnetParts[i]));
  }
  return[networkParts.join('.'), hostParts.join('.')];
}

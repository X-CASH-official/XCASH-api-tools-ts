import * as xcashInterfaces from './interfaces';
const xcash = require('./index.js');

const sleep = (s:number) => new Promise(r => setTimeout(r, s * 1000));

async function main()
{
  // Initialize xcash
  xcash.Initialize("","");

  let test:string = "Blockchain_get_block_count";
  let results:string = JSON.stringify(await xcash.Blockchain_get_block_count()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "Blockchain_get_block_hash";
  results = JSON.stringify(await xcash.Blockchain_get_block_hash(800000)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "Blockchain_get_block_template";
  results = JSON.stringify(await xcash.Blockchain_get_block_template("XCA1XPzaSeXgwrBrGbh96UD5bk21a4WabcrgtB14A7WGGdcagjVQVV1PMAg5Rj1SM3ca8ZPDvysi78HyZF9imGg48wRK2Ntqov",128)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "Blockchain_get_last_block_header";
  results = JSON.stringify(await xcash.Blockchain_get_last_block_header()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "Blockchain_get_block_header_by_hash";
  results = JSON.stringify(await xcash.Blockchain_get_block_header_by_hash("008b8147114089e9577be0644c67a28d5227f4701e345280567c589256fcd4cc")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_get_block_header_by_height";
  results = JSON.stringify(await xcash.Blockchain_get_block_header_by_height(800000)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_get_block_headers_range";
  results = JSON.stringify(await xcash.Blockchain_get_block_headers_range(800000,800002)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_get_block";
  results = JSON.stringify(await xcash.Blockchain_get_block(800000)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "Blockchain_get_info";
  results = JSON.stringify(await xcash.Blockchain_get_info()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_hard_fork_info";
  results = JSON.stringify(await xcash.Blockchain_hard_fork_info()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_version";
  results = JSON.stringify(await xcash.Blockchain_version()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "Blockchain_get_tx";
  results = JSON.stringify(await xcash.Blockchain_get_tx("35f9dccaf21dfe1df0945ebfc8b3ef28977b4ea1a78b3726c9f866facd27f7ad")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_get_balance";
  results = JSON.stringify(await xcash.Blockchain_get_balance()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_get_address";
  results = JSON.stringify(await xcash.Blockchain_get_address()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "Blockchain_get_height";
  results = JSON.stringify(await xcash.Blockchain_get_height()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  
  
  
  
  
  
  test = "API_Blockchain_stats";
  results = JSON.stringify(await xcash.API_Blockchain_stats()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "API_Blockchain_block_data";
  results = JSON.stringify(await xcash.API_Blockchain_block_data(800000)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "API_Blockchain_tx_data";
  results = JSON.stringify(await xcash.API_Blockchain_tx_data("18a5046994bec4e75d46fd17de3315592aa69d11f4b1a530717ea45a01d49312")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "API_Blockchain_prove_tx";
  results = JSON.stringify(await xcash.API_Blockchain_prove_tx("18a5046994bec4e75d46fd17de3315592aa69d11f4b1a530717ea45a01d49312","XCA1cH8Qs5hLYnzQTDuJqkJiQEZbgQsUM3BgA6vBod5T5Eindas5sikKJaLbkhM3YBW7PtoJY6BtNLkZuahksLFX5eSPDcmCLL","c10a439b706949e86146ca17c2fc41e24e4348d6b7a6d6af0623cfc5037fe20c")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "API_Blockchain_prove_balance";
  results = JSON.stringify(await xcash.API_Blockchain_prove_balance("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf","ReserveProofV1a15005880f5f88b19fc88bdec29faaf57489ba85dd02d41ec87043a5eddf95a9")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Blockchain_tx_history";
  results = JSON.stringify(await xcash.API_Blockchain_tx_history("sender","XCA1kzoR3ZLNg5zxNmxrY8FYKtgEvPZqC2xoRpm1axCpQcrrZfoKTSkSNsASDspdt3j1WcEnQJyuuB5VPSB56WWy36A4sQtQhe")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Blockchain_validate_address";
  results = JSON.stringify(await xcash.API_Blockchain_validate_address("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Blockchain_create_integrated_address";
  results = JSON.stringify(await xcash.API_Blockchain_create_integrated_address("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf","")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_stats";
  results = JSON.stringify(await xcash.API_DPOPS_stats()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_registered_delegates";
  results = JSON.stringify(await xcash.API_DPOPS_registered_delegates()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_online_delegates";
  results = JSON.stringify(await xcash.API_DPOPS_online_delegates()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_active_delegates";
  results = JSON.stringify(await xcash.API_DPOPS_active_delegates()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_delegate";
  results = JSON.stringify(await xcash.API_DPOPS_delegate("us1_xcash_foundation")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_delegate_round_stats";
  results = JSON.stringify(await xcash.API_DPOPS_delegate_round_stats("us1_xcash_foundation")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_delegates_votes";
  results = JSON.stringify(await xcash.API_DPOPS_delegates_votes("us1_xcash_foundation",1,2)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_vote_detail";
  results = JSON.stringify(await xcash.API_DPOPS_vote_detail("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_round_detail";
  results = JSON.stringify(await xcash.API_DPOPS_round_detail(810000)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_DPOPS_last_block_producer";
  results = JSON.stringify(await xcash.API_DPOPS_last_block_producer()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_stats";
  results = JSON.stringify(await xcash.API_Namespace_stats()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_registered_delegates";
  results = JSON.stringify(await xcash.API_Namespace_registered_delegates()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_delegates";
  results = JSON.stringify(await xcash.API_Namespace_delegates("us1_xcash_foundation")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_names";
  results = JSON.stringify(await xcash.API_Namespace_names("xcash")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_name_status";
  results = JSON.stringify(await xcash.API_Namespace_name_status("xcash")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_address_status";
  results = JSON.stringify(await xcash.API_Namespace_address_status("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_name_to_address";
  results = JSON.stringify(await xcash.API_Namespace_name_to_address("xcash")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Namespace_address_to_name";
  results = JSON.stringify(await xcash.API_Namespace_address_to_name("XCA1a9usG2UKajV1Dqzp8fL1BbN3hzuaaJMYjCo7qDoC4C3Vvc5owiLAqKbVw2cRbwRqx3mgrau1Z7LkX6cxR2NC4ZmFBLe2Mf")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Xpayment_Twitter_stats";
  results = JSON.stringify(await xcash.API_Xpayment_Twitter_stats()).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Xpayment_Twitter_stats_per_day";
  results = JSON.stringify(await xcash.API_Xpayment_Twitter_stats_per_day(1,2)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
  
  test = "API_Xpayment_Twitter_top_stats";
  results = JSON.stringify(await xcash.API_Xpayment_Twitter_top_stats(10)).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);

  test = "API_Xpayment_Twitter_recent_tips";
  results = JSON.stringify(await xcash.API_Xpayment_Twitter_recent_tips(10,"First","All")).includes("\"result\"") ? "PASSED" : "FAILED";
  console.log(`Testing ${test} - ${results}`);
  await sleep(5);
}

main();
